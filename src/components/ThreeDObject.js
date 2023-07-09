import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from './ThreeObjects/Box'
import './ImagePageStyle.css'

function ThreeDObject() {
  return (
    <>
        <Canvas className='canvas'>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
    </>
  )
}

export default ThreeDObject