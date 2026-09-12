import React from "react";
import "./LogoSlider.css";
import logo1 from "../assets/LogoSlider/1.webp";
import logo2 from "../assets/LogoSlider/2.webp";
import logo3 from "../assets/LogoSlider/3.webp";
import logo4 from "../assets/LogoSlider/4.webp";
import logo5 from "../assets/LogoSlider/5.webp";
import logo6 from "../assets/LogoSlider/6.webp";
import logo7 from "../assets/LogoSlider/7.webp";
import logo8 from "../assets/LogoSlider/8.webp";
import logo9 from "../assets/LogoSlider/9.webp";
import logo10 from "../assets/LogoSlider/10.webp";
import logo11 from "../assets/LogoSlider/11.webp";
import logo12 from "../assets/LogoSlider/12.webp";
import logo13 from "../assets/LogoSlider/13.webp";

function LogoSlider() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
  ];

  return (
    <section className="logo-section">
      <div className="container">

         <div className="section-title text-center">
 

  <h2>
    Brands <span>That Trust Dezora</span>
  </h2>

  <p>
    Trusted by startups, enterprises, educational institutions, and growing
    businesses worldwide for innovative web development, digital marketing,
    branding, and software solutions.
  </p>
</div>
        
        <div className="logo-slider">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;