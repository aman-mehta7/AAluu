import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import React, { Suspense} from "react";
import Experiance from "../sections/Experiance";

const Canva = () => {
  return (
    <>
      <Canvas className="canvas" >
        {/* Suspense makes sure models/textures wait until loaded */}
        <Suspense fallback={null}>
          <directionalLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Experiance />
        </Suspense>
      </Canvas>

      {/* Drei Loader gives you a nice progress bar automatically */}
      <Loader />
    </>
  );
};

export default Canva;
