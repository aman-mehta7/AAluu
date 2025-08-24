import React from "react";
import Cloud from "../three/Cloud";
import { Float } from "@react-three/drei";

const Clod = () => {
  return (
    <>
      <group position={[-50, 30, -100]} scale={5}>
        <Cloud />
      </group>
      <group position={[50, 20, -100]} scale={5}>
        <Cloud />
      </group>
      <group position={[-80, 20, -90]} scale={5}>
        <Cloud />
      </group>
      <group position={[80, 20, -90]} scale={5}>
        <Cloud />
      </group>
      <group position={[70, 20, -90]} scale={5}>
        <Cloud />
      </group>
      <group position={[20, 0, 0]} scale={5} rotation-y={Math.PI / 2}>
        <Cloud />
      </group>
      <Float  >
      <group position={[0.5, 0.1, 0]} scale={0.1} rotation-y={Math.PI / 2}>
        <Cloud color={"#9c6dde"}/>
      </group>
      <group position={[0.5, -0.1, 0.5]} scale={0.1} rotation-y={Math.PI / 2}>
        <Cloud color={"skyblue"} />
      </group>
      <group position={[0.5, -0.18, 0.2]} scale={0.1} rotation-y={Math.PI / 2}>
        <Cloud color={"pink"} />
      </group>
      </Float>
    </>
  );
};

export default Clod;
