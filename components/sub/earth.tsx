import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "@/components/main/loader";

// Earth
const Earth = () => {
  // import earth scene
  const earth = useGLTF("./space_exploration/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={0.35} // Reduced from 2 to 1.75 for better fit
      position-y={1.5} // Slightly raised position
      rotation-y={0.2} // Added slight rotation for better initial angle
    />
  );
};

// Earth Canvas
export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 90,
        near: 0.1,
        far: 200,
        position: [-4, 3, 8], // Moved camera back from 6 to 8
      }}
    >
      {/* Suspense show Canvas Loader on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5} // Added rotation speed
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.8} // Adjusted angle for better view
          minPolarAngle={Math.PI / 2.2} // Added minimum angle
        />

        {/* Ambient and directional lighting for better 3D effect */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Earth */}
        <Earth />
      </Suspense>
    </Canvas>
  );
};
