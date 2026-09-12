import React from "react";
import Hero from "../components/Hero";
// import OurAbout from "../components/OurAbout";
import Services from "../components/Services";
import Counter from "../components/Counter";
import AboutHome from "../components/AboutHome";
import Before from "../components/Before";
import Course from "../components/Course";
import Expertise from "../components/Expertise";
import LogoSlider from "../components/LogoSlider";
import HowIt from "../components/HowIt";
import Testimonial from "../components/Testimonial";
import FandQ from "../components/Fandq";
// import VideoSection from "../components/VideoSection";

function Home() {
  return (
    // Is div mein humne ek smooth fade-in animation di hai
    <div style={{ animation: "fadeIn 0.5s ease-in-out" }}>
      <Hero />
      
      {/* <OurAbout /> */}
      <Services />
      <Counter />
      {/* <AboutHome /> */}
      <HowIt />
      <Before />
      <Course />
      <Expertise />
      <FandQ />
      <Testimonial />
      <LogoSlider />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Home;