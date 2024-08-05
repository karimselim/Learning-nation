// import Environment from "./components/Environment";
import { Loader } from "@react-three/drei";
import EnvironmentComp from "./components/Environment";
import "./index.css";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Suspense>
        <EnvironmentComp />
      </Suspense>
      <Loader />
    </>
  );
};

export default App;
