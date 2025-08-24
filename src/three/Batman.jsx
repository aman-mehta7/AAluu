

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Batman(props) {
  const { nodes } = useGLTF( import.meta.env.BASE_URL +  "models/batman_middle_finger.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry}>
          <meshStandardMaterial color="yellow" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry}>
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry}>
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry}>
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry}>
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload( import.meta.env.BASE_URL + "models/batman_middle_finger.glb");

