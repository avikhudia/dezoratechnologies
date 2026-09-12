import React, { useState } from "react";
import "./OurAbout.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OurAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
const accordionData = [
  {
    title: "What services does Dezora Technologies offer?",
    content:
      "We provide website development, SEO, digital marketing, branding, software, and eCommerce solutions.",
  },
  {
    title: "Why choose Dezora Technologies?",
    content:
      "We deliver responsive websites, creative designs, and result-driven digital marketing for business growth.",
  },
  {
    title: "Who do you work with?",
    content:
      "We help startups, businesses, and brands build a strong online presence with digital solutions.",
  },
];

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="dzabout-section" id="about">
      <div className="dzabout-grid"></div>
      <div className="dzabout-glow dzabout-glow-one"></div>
      <div className="dzabout-glow dzabout-glow-two"></div>

      <div className="container position-relative">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="dzabout-visual">
              <div className="dzabout-main-image">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="Dezora Technologies Team"
                />
                <div className="dzabout-image-overlay"></div>
                <div className="dzabout-scan-beam"></div>

                <div className="dzabout-image-tag">
                  <span></span>
                  BUILD • LEARN • GROW
                </div>
              </div>

              <div className="dzabout-secondary-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"
                  alt="Digital Collaboration"
                />

                <div className="dzabout-secondary-label">
                  <small>OUR APPROACH</small>
                  <strong>Practical by design.</strong>
                </div>
              </div>

              <div className="dzabout-experience-card">
                <div className="dzabout-exp-top">
                  <span>01</span>
                  <i className="bi bi-arrow-up-right"></i>
                </div>

                <div className="dzabout-exp-number">
                  <strong>6</strong>
                  <sup>+</sup>
                </div>

                <p>
                  Years of combined
                  <br />
                  digital experience
                </p>

                <div className="dzabout-exp-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              

              <div className="dzabout-tech-strip">
                <div className="dzabout-tech-track">
                  <span>WEB</span>
                  <i></i>
                  <span>DESIGN</span>
                  <i></i>
                  <span>MARKETING</span>
                  <i></i>
                  <span>TRAINING</span>
                  <i></i>
                  <span>AI</span>
                  <i></i>
                  <span>WEB</span>
                  <i></i>
                  <span>DESIGN</span>
                  <i></i>
                  <span>MARKETING</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="dzabout-content">
              <div className="dzabout-kicker">
                <span></span>
                ABOUT DEZORA TECHNOLOGIES
              </div>

              <h2>
  Your Trusted <span>Web Development & Digital Marketing Partner</span>
</h2>

<p className="dzabout-lead">
  Dezora Technologies delivers website development, SEO, digital marketing,
  branding, and software solutions that help businesses build a stronger
  online presence and achieve long-term growth.
</p>

              <div className="dzabout-metrics">
                <div className="dzabout-metric-item">
                  <span className="dzabout-metric-no">01</span>
                  <div>
                    <strong>Business</strong>
                    <small>Digital growth solutions</small>
                  </div>
                </div>

                <div className="dzabout-metric-divider"></div>

                <div className="dzabout-metric-item">
                  <span className="dzabout-metric-no">02</span>
                  <div>
                    <strong>Education</strong>
                    <small>Practical tech learning</small>
                  </div>
                </div>
              </div>

              <div className="dzabout-accordion">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`dzabout-accordion-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="dzabout-accordion-header"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="dzabout-acc-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="dzabout-acc-title">{item.title}</span>

                      <span className="dzabout-custom-plus">
                        <i
                          className={`bi ${
                            activeIndex === index ? "bi-dash-lg" : "bi-plus-lg"
                          }`}
                        ></i>
                      </span>
                    </button>

                    <div
                      className={`dzabout-accordion-body ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <div className="dzabout-accordion-content">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAbout;