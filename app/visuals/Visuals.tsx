'use client'

import { useAspect, PerformanceMonitor } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { FlowMaterial } from './materials/FlowMaterial'

function ShaderPlane() {
  const ref = useRef<any>(null)
  const size = useAspect(1024, 768)
  useFrame((state, delta) => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ref.current.dark = prefersDark
    ref.current.time = prefersReducedMotion ? 100 : ref.current.time + delta
    ref.current.scroll = window.pageYOffset
  })
  return (
    <mesh scale={size}>
      <planeGeometry />
      <flowMaterial transparent={true} ref={ref} key={FlowMaterial.key} />
    </mesh>
  )
}

export default function Visuals() {
  const [dpr, setDpr] = useState(1.5)
  return (
    <div className="fixed top-0 left-0 h-screen w-screen -z-10">
      <Canvas dpr={dpr} orthographic={true}>
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(2)}
        />
        <ShaderPlane />
      </Canvas>
    </div>
  )
}
