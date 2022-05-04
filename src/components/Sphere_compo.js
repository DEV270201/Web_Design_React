import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function Sphere_func() {
  return (
    <>
      <mesh>
        <Sphere scale={2} args={[1, 100, 200]}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default Sphere_func;