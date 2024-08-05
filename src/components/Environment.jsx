/* eslint-disable react/no-unknown-property */
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { School } from "./School";
import { Karim } from "./Karim";
import { CameraManager } from "./CameraManager";

const EnvironmentComp = () => {
  return (
    <Canvas>
      <CameraManager />
      <OrbitControls />
      <ambientLight intensity={0.8} color="white" />
      <Environment preset="city" color="white" />
      <School position={[0, -8, 0]} rotation={[0, Math.PI, 0]} />
      <Karim position={[-12, -7.95, -14]} scale={7} rotation={[0, 0.5, 0]} />
    </Canvas>
  );
};

export default EnvironmentComp;
