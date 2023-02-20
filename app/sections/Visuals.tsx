'use client'

import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { useRef } from 'react'
import { ShaderMaterial } from 'three'
import { WaveMaterial } from './visuals/WaveMaterial'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShaderPlane() {
  const ref = useRef<ShaderMaterial>(null)
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        toneMapped={true}
        colorStart={'yellow'}
        colorEnd={'orange'}
        transparent={true}
      />
    </mesh>
  )
}

export default function Visuals() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas orthographic={true}>
        <ShaderPlane />
      </Canvas>
    </div>
  )
}
