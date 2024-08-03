import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Karim(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/karim-first.glb");
  const { actions } = useAnimations(animations, group);

  console.log(animations);

  useEffect(() => {
    if (actions["Animation"]) {
      const animation = actions["Animation"];
      animation.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_0"
            geometry={nodes.avaturn_glasses_0.geometry}
            material={materials.avaturn_glasses_0_material}
            skeleton={nodes.avaturn_glasses_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1"
            geometry={nodes.avaturn_glasses_1.geometry}
            material={materials.avaturn_glasses_1_material}
            skeleton={nodes.avaturn_glasses_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/karim-first.glb");
