import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Karim(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/karim-first.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="Body_Mesh"
            geometry={nodes.Body_Mesh.geometry}
            material={materials.Body}
            skeleton={nodes.Body_Mesh.skeleton}
          />
          <group name="Eye_Mesh" />
          <skinnedMesh
            name="Eye_Mesh001"
            geometry={nodes.Eye_Mesh001.geometry}
            material={materials.Eyes}
            skeleton={nodes.Eye_Mesh001.skeleton}
            morphTargetDictionary={nodes.Eye_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Eye_Mesh001.morphTargetInfluences}
          />
          <group name="EyeAO_Mesh" />
          <skinnedMesh
            name="EyeAO_Mesh001"
            geometry={nodes.EyeAO_Mesh001.geometry}
            material={materials.EyeAO}
            skeleton={nodes.EyeAO_Mesh001.skeleton}
            morphTargetDictionary={nodes.EyeAO_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeAO_Mesh001.morphTargetInfluences}
          />
          <group name="Eyelash_Mesh" />
          <skinnedMesh
            name="Eyelash_Mesh001"
            geometry={nodes.Eyelash_Mesh001.geometry}
            material={materials.Eyelash}
            skeleton={nodes.Eyelash_Mesh001.skeleton}
            morphTargetDictionary={nodes.Eyelash_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Eyelash_Mesh001.morphTargetInfluences}
          />
          <group name="Head_Mesh" />
          <skinnedMesh
            name="Head_Mesh001"
            geometry={nodes.Head_Mesh001.geometry}
            material={materials.Head}
            skeleton={nodes.Head_Mesh001.skeleton}
            morphTargetDictionary={nodes.Head_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Head_Mesh001.morphTargetInfluences}
          />
          <group name="Teeth_Mesh" />
          <skinnedMesh
            name="Teeth_Mesh001"
            geometry={nodes.Teeth_Mesh001.geometry}
            material={materials.Teeth}
            skeleton={nodes.Teeth_Mesh001.skeleton}
            morphTargetDictionary={nodes.Teeth_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Teeth_Mesh001.morphTargetInfluences}
          />
          <group name="Tongue_Mesh" />
          <skinnedMesh
            name="Tongue_Mesh001"
            geometry={nodes.Tongue_Mesh001.geometry}
            material={materials["Teeth.001"]}
            skeleton={nodes.Tongue_Mesh001.skeleton}
            morphTargetDictionary={nodes.Tongue_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Tongue_Mesh001.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/karim-first.glb");
