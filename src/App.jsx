import "./App.css";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { CarModel } from "./models/Car";
import { Environment, OrbitControls } from "@react-three/drei";
import { PinkModel } from "./models/Pink-ballon";

function App() {
  const store = createXRStore();

  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <CarModel />
          <PinkModel />
          <OrbitControls />
          {/* <Environment preset="sunset" /> */}
          <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
