import React, { useEffect, useRef } from "react";
import "./Course.css";
import img1 from "../assets/web design.webp";
import img4 from "../assets/graphic design.webp";
import img2 from "../assets/digital marketing.webp";
import img3 from "../assets/video edit.webp";
import img5 from "../assets/basic computer.webp";
import img6 from "../assets/Typeing.webp";
import dezoraLogo from "../assets/dezora logo.jpeg";

const PortfolioSlider = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const portfolioItems = [
    {
      id: 1,
      image: img1,
      category: "Restaurant Website",
      title: "Web Development",
      description: "Complete UI/UX Design, Branding & Development.",
      link: "#",
      // showLogo: true,
    },
    {
      id: 2,
      image: img2,
      category: "Insurance",
      title: "Digital Marketing",
      description: "Enterprise Web Experience.",
      link: "#",
    },
    {
      id: 3,
      image: img3,
      category: "Mobile App",
      title: "Video Editing",
      description: "Modern Product Design.",
      link: "#",
    },
    {
      id: 4,
      image: img4,
      category: "Travel",
      title: "Graphic Desigen",
      description: "Travel Community Platform.",
      link: "#",
    },
    {
      id: 5,
      image: img5,
      category: "SaaS Dashboard",
      title: " Basic Computer",
      description: "Smart SaaS Product Experience.",
      link: "#",
    },
    {
      id: 6,
      image: img6,
      category: "Typing Course",
      title: "Typing Course",
      description: "Premium Shopping Interface Design.",
      link: "#",
    },
  ];

  const loopItems = [...portfolioItems, ...portfolioItems];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let speed = window.innerWidth < 576 ? 0.35 : window.innerWidth < 992 ? 0.45 : 0.6;

    const updateSpeed = () => {
      speed = window.innerWidth < 576 ? 0.35 : window.innerWidth < 992 ? 0.45 : 0.6;
    };

    const animate = () => {
      const totalWidth = track.scrollWidth / 2;
      positionRef.current += speed;

      if (positionRef.current >= totalWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSpeed);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="ps-section">
  <div className="ps-container">

    <div className="course-heading">
      <h2 className="course-text">Our Courses</h2>
      <p className="course-ph">
        Explore our latest courses designed to help you learn practical skills and grow faster.
      </p>
    </div>

    <div className="ps-slider">
      <div className="ps-track" ref={trackRef}>
        {loopItems.map((item, index) => (
          <div className="ps-item" key={`${item.id}-${index}`}>
            <div className="ps-card">
              <img src={item.image} alt={item.title} className="ps-image" />

              <div className="ps-visible">
                {item.showLogo ? (
                  <div className="ps-logo-box">
                    <img src={dezoraLogo} alt="Dezora logo" />
                  </div>
                ) : (
                  <h4>{item.title}</h4>
                )}
              </div>

              <div className="ps-overlay">
                <span className="ps-badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>View Project →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
  );
};

export default PortfolioSlider;