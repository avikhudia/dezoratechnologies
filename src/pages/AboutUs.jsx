import React from "react";
// import "./About.css"; // Agar CSS file banayi hai toh
import AboutHero from "../components/About Us/AboutHero";
import OurAbout from "../components/OurAbout";
import Co from "../components/About Us/co";

import OurSolution from "../components/About Us/OurSolution";
// import Performence from "../components/About Us/Performence";

import LogoSlider from "../components/LogoSlider";


function About() {
  return (
    <div className="about-page-wrapper">
      <AboutHero />
      <OurAbout />
      <Co />
      <LogoSlider />
       <OurSolution />
      {/* <Performence /> */}
     
    </div>
  );
}
export default About;