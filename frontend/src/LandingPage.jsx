import React from "react";
import Particles from "./Particles";
import image1 from "./assets/image1.png";
import BlurText from "./BlurText";
import Navbar from "./Navbar";
// import RollingGallery from './RollingGallery'
// import Teams from "./Teams";
export default function LandingPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          color: "white",
          height: "100vh",
          width: "100%"
        }}
      >
        <Navbar></Navbar>
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "relative",
              marginTop: "200px",
              marginLeft: "100px"
            }}
          >
            <BlurText
              text="CRESA"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
            <BlurText
              text="Welcome to Computer Regional Engineering Students Association"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "relative",
              marginLeft: "200px",
              marginTop: "50px"
            }}
          >
            <img
              src={image1}
              alt=""
            />
          </div>
        </div>
        
        
        {/* <Teams></Teams> */}
      </div>
    </div>
  );
}
