import { extend, MaterialNode } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { ShaderMaterial } from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    flowMaterial: MaterialNode<ShaderMaterial, typeof FlowMaterial>
  }
}

const FlowMaterial = shaderMaterial(
  {
    time: 0,
    dark: false,
    scroll: 0,
  },
  /* glsl */ `
    varying vec2 vUv;
    
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }
  `,
  /* glsl */ `
    #define PI 3.14159265359
  
    uniform float time;
    uniform bool dark;
    uniform int scroll;
    varying vec2 vUv;

    vec3 hash33(vec3 p) {
      float n = sin(dot(p, vec3(7, 157, 113)));
      return fract(vec3(2097152, 262144, 32768) * n) * 2. - 1.;
    }

    float tetraNoise(in vec3 p) {
      vec3 i = floor(p + dot(p, vec3(0.333333)));
      p -= i - dot(i, vec3(0.166666));
      vec3 i1 = step(p.yzx, p), i2 = max(i1, 1.0 - i1.zxy);
      i1 = min(i1, 1.0 - i1.zxy);
      vec3 p1 = p - i1 + 0.166666, p2 = p - i2 + 0.333333, p3 = p - 0.5;
      vec4 v = max(0.5 - vec4(dot(p, p), dot(p1, p1), dot(p2, p2), dot(p3, p3)), 0.0);
      vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)), dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.)));
      return clamp(dot(d, v * v * v * 8.) * 1.732 + .5, 0., 1.);
    }

    vec2 smoothRepeatStart(float x, float size) {
      return vec2(mod(x - size / 2., size), mod(x, size));
    }

    float smoothRepeatEnd(float a, float b, float x, float size) {
      return mix(a, b, smoothstep(0., 1., sin((x / size) * PI * 2. - PI * .5) * .5 + .5));
    }

    vec3 blendMultiply(vec3 base, vec3 blend) {
      return base*blend;
    }
    
    vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
      return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
    }

    void main() {
      vec2 uv = vUv.xy;
      uv *= 4.0;
      float repeatSize = 16.;
      float x = (uv.x - mod(float(time) / 15.0, repeatSize / 2.));
      float y = -uv.y;
      
      vec2 ab;
      float noise;
      float noiseA, noiseB;
      float opacity;

      ab = smoothRepeatStart(x, repeatSize);
      noiseA = tetraNoise(16. + vec3(vec2(ab.x, uv.y) * 1.2, 0)) * .5;
      noiseB = tetraNoise(16. + vec3(vec2(ab.y, uv.y) * 1.2, 0)) * .5;
      noise = smoothRepeatEnd(noiseA, noiseB, x, repeatSize) - float(scroll) / 50000.0;
      
      ab = smoothRepeatStart(y, repeatSize / 2.);
      noiseA = tetraNoise(vec3(vec2(uv.x, ab.x) * .5, 0)) * 2.;
      noiseB = tetraNoise(vec3(vec2(uv.x, ab.y) * .5, 0)) * 2.;
      noise *= smoothRepeatEnd(noiseA, noiseB, y, repeatSize / 2.);
      
      ab = smoothRepeatStart(x, repeatSize);
      noiseA = tetraNoise(9. + vec3(vec2(ab.x, uv.y) * .05, 0)) * 5.;
      noiseB = tetraNoise(9. + vec3(vec2(ab.y, uv.y) * .05, 0)) * 5.;
      noise *= smoothRepeatEnd(noiseA, noiseB, x, repeatSize);

      noise *= 0.5;
      noise = mix(noise, dot(uv, vec2(-.66, 1.) * .4), .6);
      
      float spacing = 1. / 25.;
      float lines = mod(noise, spacing) / spacing;
      lines = min(lines * 2., 1.) - max(lines * 2. - 1., 0.);
      lines /= fwidth(noise / spacing);
      lines /= 2.;
      
      float weight = smoothstep(.0, .05, .05);
      weight = mix(.5, .33, weight);
      weight *= 4.;
      
      lines -= weight - 1.;
      lines = 1. - lines;
      
      vec3 color = vec3(1.000,0.833,0.224);
      color = blendMultiply(vec3(lines), color);

      vec4 final = vec4(vec3(color), mod(noise, spacing));

      if(dark) {
        opacity = 2.5;
      } else {
        opacity = 0.75;
      }
      
      gl_FragColor = vec4(vec3(final), mix(0.0, final.a, clamp(0.0, opacity, time / 2.0)));
    }
  `,
  (self) => {
    if (self) {
      self.extensions.derivatives = true
    }
  }
)

extend({ FlowMaterial })
export { FlowMaterial }
