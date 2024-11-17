import "./App.css";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { CarModel } from "./models/Car";
import { Environment, OrbitControls } from "@react-three/drei";
import { PinkModel } from "./models/Pink-ballon";
import { useEffect } from "react";

function App() {
  const store = createXRStore();

  async function handleVR(){
    const vr = await store.enterVR()
    console.log('vr : ',vr)
  }

  return (
    <>
      <button onClick={() => handleVR()}>Enter VR</button>
      <Canvas>
        <XR store={store}>
          <CarModel />
          <PinkModel store={store} />
          {/* <OrbitControls /> */}
          {/* <Environment preset="sunset" /> */}
          <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
