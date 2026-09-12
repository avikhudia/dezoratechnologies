import React from "react";
import "./Hero.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import img1 from "../assets/stemoid.webp";
import img2 from "../assets/zavora.webp";
import img3 from "../assets/smartmove.webp";
import img4 from "../assets/asess.webp";

import logo1 from "../assets/LogoSlider/1.webp";
import logo2 from "../assets/LogoSlider/1.webp";
import logo3 from "../assets/LogoSlider/1.webp";
import logo4 from "../assets/smo.webp";

const Hero = () => {
  const projects = [
    {
      id: 1,
      image: img1,
      logo: logo1,
      category: "Restaurant Website",
      title: "Stemoid",
      description: "Complete UI/UX Design, Branding & Development.",
      link: "#",
    },
    {
      id: 2,
      image: img2,
      logo: logo2,
      category: "Insurance",
      title: "Zavora",
      description: "Enterprise Web Experience.",
      link: "#",
    },
    {
      id: 3,
      image: img3,
      logo: logo3,
      category: "Mobile App",
      title: "Winker",
      description: "Modern Product Design.",
      link: "#",
    },
    {
      id: 4,
      image: img4,
      logo: logo4,
      category: "Travel",
      title: "Smart move overseas",
      description: "Travel Community Platform.",
      link: "#",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg"></div>

        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Your Partner for Digital Growth</span>

            <h1 className="hero-title">
              Websites, Marketing, and Innovation.
            </h1>

            <p className="hero-desc">
              Dezora Technologies helps businesses build a strong online presence
              and stay ahead of the competition through tailor-made digital
              solutions. From eye-catching websites and SEO to Google Ads,
              branding, and custom software development, we create strategies
              that drive growth, strengthen your brand, and deliver measurable
              results.
            </p>

            <div className="hero-btn-box">
              <div className="hero-buttons">
                <a href="#" className="hero-btn">
                  <span className="text first">Services</span>
                  <span className="text second">Services</span>
                </a>

                <a href="#" className="hero-arrow" aria-label="Services">
                  <span className="icon first">
                    <FaArrowUpRightFromSquare />
                  </span>
                  <span className="icon second">
                    <FaArrowUpRightFromSquare />
                  </span>
                </a>
              </div>

              <div className="hero-buttons">
                <a href="#" className="hero-btn">
                  <span className="text first">Courses</span>
                  <span className="text second">Courses</span>
                </a>

                <a href="#" className="hero-arrow" aria-label="Courses">
                  <span className="icon first">
                    <FaArrowUpRightFromSquare />
                  </span>
                  <span className="icon second">
                    <FaArrowUpRightFromSquare />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-name">
                  <div className="hero-logo-box">
                    <img src={project.logo} alt={`${project.title} logo`} />
                  </div>
                </div>

                <div className="project-overlay">
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>
                    View Project <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;