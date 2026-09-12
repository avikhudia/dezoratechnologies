import React, { useState } from "react";
import "./Fandq.css";
const faqData = [
  {
    id: "dzFaqOne",
    number: "01",
    question: "What services does Dezora Technologies offer?",
    answer:
      "We provide website development, SEO, digital marketing, branding, software, and eCommerce solutions.",
  },
  {
    id: "dzFaqTwo",
    number: "02",
    question: "Do you build custom business websites?",
    answer:
      "Yes, we create responsive, SEO-friendly, and custom websites for all types of businesses.",
  },
  {
    id: "dzFaqThree",
    number: "03",
    question: "Do you provide SEO and Google Ads services?",
    answer:
      "Yes, we offer SEO, Google Ads, social media marketing, and local SEO to grow your business.",
  },
  {
    id: "dzFaqFour",
    number: "04",
    question: "What training courses do you offer?",
    answer:
      "We provide practical training in web development, digital marketing, graphic design, video editing, and AI tools.",
  },
  {
    id: "dzFaqFive",
    number: "05",
    question: "Do you develop custom software?",
    answer:
      "Yes, we build custom software, web applications, and business automation solutions.",
  },
  {
    id: "dzFaqSix",
    number: "06",
    question: "How can I start a project?",
    answer:
      "Contact our team for a free consultation, and we'll recommend the best solution for your business.",
  },
];

function FandQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="dzfaq-section" id="faq">
      <div className="dzfaq-grid"></div>
      <div className="dzfaq-beam"></div>
      <div className="dzfaq-glow dzfaq-glow-one"></div>
      <div className="dzfaq-glow dzfaq-glow-two"></div>

      <div className="container position-relative">
        <div className="dzfaq-top">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <div className="dzfaq-kicker">
                <span></span>
                FAQS
              </div>

              <h2>
                Frequently Asked
                <span>Questions</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <div className="dzfaq-top-side">
                <p>
                  Find answers about website development, SEO, digital
                  marketing, software development, branding, and training
                  services.
                </p>

                <div className="dzfaq-availability">
                  <span></span>
                  FREE CONSULTATION
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dzfaq-shell">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-5">
              <div className="dzfaq-panel">
                <div className="dzfaq-panel-top">
                  <div className="dzfaq-panel-label">
                    <span>DEZORA</span>
                    SUPPORT CENTER
                  </div>

                  <div className="dzfaq-panel-code">24 / 7</div>
                </div>

                <div className="dzfaq-visual">
                  <div className="dzfaq-visual-icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>

                  <div className="dzfaq-data-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="dzfaq-panel-content">
                  <small>HAVE A QUESTION?</small>

                  <h3>
                    Get Expert
                    <span>Guidance.</span>
                  </h3>

                  <p>
                    We help businesses with website development, SEO, digital
                    marketing, branding, and custom software solutions.
                  </p>
                </div>

                <div className="dzfaq-chips">
                  <span>
                    <i className="bi bi-globe2"></i>
                    Web Development
                  </span>

                  <span>
                    <i className="bi bi-graph-up-arrow"></i>
                    SEO
                  </span>

                  <span>
                    <i className="bi bi-code-slash"></i>
                    Software
                  </span>

                  <span>
                    <i className="bi bi-mortarboard"></i>
                    Digital Marketing
                  </span>
                </div>

                <div className="dzfaq-panel-bottom">
                  <div className="dzfaq-support-status">
                    <span className="dzfaq-status-dot"></span>

                    <div>
                      <small>SUPPORT TEAM</small>

                      <strong>Ready to Help</strong>
                    </div>
                  </div>

                  <a href="#contact-form" className="dzfaq-panel-btn">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>

                <div className="dzfaq-big-code">?</div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="dzfaq-content">
                <div className="dzfaq-content-head">
                  <div>
                    <small>COMMON QUESTIONS</small>
                    <h3>
                      Everything You
                      <br />
                      Need to Know
                    </h3>
                  </div>

                  <div className="dzfaq-question-count">
                    <strong>06</strong>
                    <span>
                      POPULAR
                      <br />
                      FAQS
                    </span>
                  </div>
                </div>

                <div
                  className="accordion dzfaq-accordion"
                  id="dezoraFaqAccordion"
                >
                  {faqData.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                      <div className="accordion-item" key={item.id}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={item.id}
                          >
                            <span className="dzfaq-number">{item.number}</span>

                            <span className="dzfaq-question">
                              {item.question}
                            </span>

                            <span className="dzfaq-plus">
                              <i
                                className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"}`}
                              ></i>
                            </span>
                          </button>
                        </h2>

                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FandQ;
