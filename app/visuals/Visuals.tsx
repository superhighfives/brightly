'use client'

import { useAspect } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { ShaderMaterial } from 'three'
import { FlowMaterial } from './materials/FlowMaterial'

function ShaderPlane() {
  const ref = useRef<ShaderMaterial>(null)
  const size = useAspect(1024, 768)
  useFrame((state, delta) => ((ref.current as any).time += delta))
  return (
    <mesh scale={size}>
      <planeGeometry />
      <flowMaterial transparent={true} ref={ref} key={FlowMaterial.key} />
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
