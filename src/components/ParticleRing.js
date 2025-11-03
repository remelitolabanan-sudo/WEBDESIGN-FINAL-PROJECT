import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils";

const ParticleRing = () => {
  return (
    <div className="particle-ring-wrapper">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        className="particle-canvas"
      >
        <OrbitControls enableZoom={false} enablePan={false} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ clock, camera }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }

    // Mouse parallax effect
    camera.position.x = 10 + mouse.current.x * 5;
    camera.position.y = -7.5 + mouse.current.y * 3;
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => (
  <Sphere position={position} args={[0.1, 10, 10]}>
    <meshStandardMaterial
      emissive={color}
      emissiveIntensity={0.5}
      roughness={0.5}
      color={color}
    />
  </Sphere>
);

export default ParticleRing;
