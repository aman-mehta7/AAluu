import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import React from "react";
import * as THREE from "three";

const Background = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[800, 800, 800]} rotation-y={Math.PI / 2}>
        <LayerMaterial
         color={"white"}
          lighting="basic"
          // transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#357ca1"}
            colorB={"#7caecf"}
            axes={"y"}
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};

export default Background;