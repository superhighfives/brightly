'use client'

import { Canvas } from '@react-three/fiber'

export default function Visuals() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        shadows={true}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <mesh position={[0, -1, 0]} recieveShadow={true}>
          <boxBufferGeometry args={[30, 1, 10]} />
          <meshPhysicalMaterial color="yellow" />
        </mesh>
        <ambientLight color={'white'} intensity={0.05} />
      </Canvas>
    </div>
  )
}
