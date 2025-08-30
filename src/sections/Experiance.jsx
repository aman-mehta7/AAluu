import React, { useRef } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import Background from "./Background";
import { PerspectiveCamera } from "@react-three/drei";
import Midfing from "../three/midfing";
import CaveHouse from "../three/CaveHouse";
import Clod from "../components/Clod";
import Batman from "../three/Batman";
import Car from "../three/Car";
import Bloon from "../three/Bloon";
import { Text} from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


const Experiance = () => {
    const textRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // cycle through rainbow colors
    textRef.current.color = new THREE.Color(`hsl(${(t * 50) % 360}, 100%, 50%)`)
  })
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.2, 0]} fov={60} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2 - 0.2} // slightly down
        maxPolarAngle={Math.PI / 2 + 0.2} // slightly up
      />

      <Background />

      <group position={[0, 0.2, 1]}>
         <Text color="white" fontSize={0.1}> 
          😘
        </Text>
      </group>
      <group position={[0, -0.2, 1]}>
         <Text color="white" fontSize={0.1}>
          Don't cry 😂
        </Text>
      </group>
      <group position={[0, 0, 1]}>
         <Text color="white" fontSize={0.1}>
          ❤️❤️❤️🖕❤️❤️❤️
        </Text>
      </group>
      <group position={[-3, 30, -100]}>
         <Text color="white" fontSize={5}>
          HAHAHAHAH !!
        </Text>
      </group>
      <group position={[-3, 25, -100]}>
         <Text color="white" fontSize={2}>
          just wanna say
        </Text>
      </group>
      <group position={[-80, 30, -150]}>
         <Text color="white" fontSize={2}>
          left click and move your mouse to explore!
        </Text>
      </group>

      <group position={[15, 5, -100]}>
         <Text color="white" fontSize={5}>
          YOU
        </Text>
      </group>
      <group position={[25, -5, -100]}>
         <Text color="white" fontSize={5}>
          Again😂😂...
        </Text>
      </group>
        <group position={[-15, 5, -100]}>
          <Text color="white" fontSize={5} ref={textRef}>
            FUCK
          </Text>
        </group>
      <group rotation-y={Math.PI / 3} position={[0, 5, -100]}>
        <Midfing />
      </group>
      <group position={[0.1, 0, 0]}>
        <Clod />
      </group>
      <group rotation-y={Math.PI / -1} position={[0.3, -0.5, 1]}>
        <CaveHouse />
      </group>
      <group scale={0.03} rotation-y={Math.PI / 3} position={[-2, -0.3, -1]}>
        <Batman />
      </group>
      <group
        scale={0.02}
        rotation-x={Math.PI / 1}
        rotation-y={Math.PI / 2}
        position={[-1, -0.1, -0.2]}
      >
        <Batman />
      </group>
      <group scale={0.01} rotation-y={Math.PI / 1.5} position={[-1, -0.3, 1]}>
        <Batman />
      </group>

      <group position={[-1.1, -0.5, -1]} rotation-y={Math.PI / 5} scale={0.25}>
        <Car />
      </group>

      <group position={[-2, -0.5, 1.2]} rotation-y={Math.PI / 1.5} scale={0.8}>
        <Bloon />
      </group>
      <group></group>
      <group></group>
      <group></group>
    </>
  );
};

export default Experiance;
