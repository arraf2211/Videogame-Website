import React from 'react'
import { MeshDistortMaterial, Sphere } from "@react-three/drei";


export default function Box() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={2}
        speed={3}
        roughness={1}
      />
    </Sphere>
  );
}
