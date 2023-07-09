import React from 'react'
import { MeshDistortMaterial, Sphere } from "@react-three/drei";


export default function Box() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#A7D489"
        attach="material"
        distort={1}
        speed={2}
        roughness={1}
      />
    </Sphere>
  );
}
