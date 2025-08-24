
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experiance from './sections/Experiance'

const App = () => {
  return (
    <>
    <Canvas>
     
      <directionalLight position={[10, 10, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Experiance />
    </Canvas>
    </>
  )
}

export default App