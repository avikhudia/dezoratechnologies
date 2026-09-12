import React, { useState } from "react";
import "./WebDevelopment.css";

const faqData = [
  {
    question: "How much does a website cost?",
    answer:
      "Website cost depends on page count, design complexity, functionality, integrations and content requirements. The packages above are starting examples, not fixed quotes for every project.",
  },
  {
    question: "How long does development take?",
    answer:
      "A smaller business website may take around 1–3 weeks, while larger or custom projects can take longer depending on scope, revisions and content readiness.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Responsive behaviour is a core part of our website development approach, with layouts adapted for major screen sizes.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Domain and hosting requirements can be discussed separately. The right hosting choice depends on website technology, traffic expectations and project needs.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Existing websites can be reviewed for design, structure, responsiveness, performance and conversion improvements before recommending a redesign approach.",
  },
];

function WebDevelopment() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* HERO */}
      <section className="wdx-hero">
        <div className="wdx-hero-grid"></div>
        <div className="wdx-hero-beam"></div>

        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="wdx-breadcrumb">
                <a href="/">Home</a>
                <i className="bi bi-chevron-right"></i>
                <a href="/services">Services</a>
                <i className="bi bi-chevron-right"></i>
                <span>Web Development</span>
              </div>

              <div className="wdx-hero-label">
                <span></span>
                DEZORA WEB DEVELOPMENT
              </div>

              <h1>
                Websites that
                <span>work harder.</span>
              </h1>

              <p className="wdx-hero-copy">
                We design and develop responsive, fast and
                conversion-focused websites for businesses,
                startups and growing brands — from simple
                corporate websites to advanced custom platforms.
              </p>

              <div className="wdx-hero-actions">
                <a href="#pricing" className="wdx-primary-btn">
                  View Packages
                  <i className="bi bi-arrow-up-right"></i>
                </a>

                <a href="#process" className="wdx-secondary-btn">
                  <i className="bi bi-play-circle"></i>
                  Explore Process
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="wdx-visual">
                <div className="wdx-browser">
                  <div className="wdx-browser-top">
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="wdx-browser-url">
                      dezora.tech / build
                    </div>
                  </div>

                  <div className="wdx-browser-body">
                    <div className="wdx-code-window">
                      <div className="wdx-code-title">
                        DIGITAL EXPERIENCE / 01
                      </div>

                      <div className="wdx-code-main">
                        Design.
                        <br />
                        Develop.
                        <br />
                        <span>Scale.</span>
                      </div>

                      <div className="wdx-code-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wdx-float-card wdx-float-one">
                  <strong>100%</strong>
                  <span>Responsive Build</span>
                </div>

                <div className="wdx-float-card wdx-float-two">
                  <strong>SEO</strong>
                  <span>Ready Structure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <div className="wdx-stats">
        <div className="container">
          <div className="wdx-stats-shell">
            <div className="wdx-stat">
              <strong>100%</strong>
              <span>Mobile Responsive</span>
            </div>

            <div className="wdx-stat">
              <strong>Fast</strong>
              <span>Performance Focused</span>
            </div>

            <div className="wdx-stat">
              <strong>SEO</strong>
              <span>Search Ready Structure</span>
            </div>

            <div className="wdx-stat">
              <strong>Secure</strong>
              <span>Modern Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="wdx-section wdx-overview">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="wdx-overview-copy">
                <div className="wdx-kicker">SERVICE OVERVIEW</div>

                <h2 className="wdx-title">
                  More than a website.
                  <span>A digital business asset.</span>
                </h2>

                <p className="wdx-desc">
                  Your website should not only look attractive.
                  It should communicate trust, explain your
                  services clearly, perform smoothly across
                  devices and help visitors take meaningful action.
                </p>

                <div className="wdx-check-list">
                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    Responsive Design
                  </div>

                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    Clean UI / UX
                  </div>

                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    Speed Optimization
                  </div>

                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    SEO Structure
                  </div>

                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    Contact Integration
                  </div>

                  <div className="wdx-check">
                    <i className="bi bi-check-lg"></i>
                    Secure Development
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="wdx-overview-panel">
                <small>WHAT WE OPTIMIZE</small>

                <h3>
                  Built around
                  <span>real user behaviour.</span>
                </h3>

                <div className="wdx-feature-stack">
                  <div className="wdx-feature-row">
                    <span>User Experience</span>
                    <strong>UI / UX</strong>
                  </div>

                  <div className="wdx-feature-row">
                    <span>Device Compatibility</span>
                    <strong>Responsive</strong>
                  </div>

                  <div className="wdx-feature-row">
                    <span>Search Visibility</span>
                    <strong>SEO Ready</strong>
                  </div>

                  <div className="wdx-feature-row">
                    <span>Business Goals</span>
                    <strong>Conversion</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className="wdx-section wdx-types">
        <div className="container">
          <div className="wdx-section-head">
            <div className="wdx-kicker">WHAT WE BUILD</div>

            <h2 className="wdx-title">
              One service.
              <span>Many possibilities.</span>
            </h2>

            <p className="wdx-desc">
              We select the structure and technology according
              to your business requirements instead of forcing
              every project into the same template.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Business Website</h3>
                <p>
                  Professional websites for companies,
                  agencies and service-based businesses.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-cart3"></i>
                </div>
                <h3>E-commerce Store</h3>
                <p>
                  Product-focused online stores with
                  shopping and conversion experiences.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h3>Landing Page</h3>
                <p>
                  Focused pages for campaigns, lead generation,
                  product launches and paid advertising.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
                <h3>Portfolio Website</h3>
                <p>
                  Premium personal websites for professionals,
                  creators and independent experts.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-window-stack"></i>
                </div>
                <h3>Custom Web App</h3>
                <p>
                  Tailored interfaces and web-based systems
                  for specific business workflows.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="wdx-type-card">
                <div className="wdx-type-icon">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h3>Institute Website</h3>
                <p>
                  Course, admission and education-focused
                  websites for institutes and academies.
                </p>
                <a href="#pricing">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="wdx-section wdx-tools">
        <div className="container">
          <div className="row align-items-end g-4">
            <div className="col-lg-8">
              <div className="wdx-kicker">TECHNOLOGY STACK</div>

              <h2 className="wdx-title">
                Tools chosen for
                <span>the right job.</span>
              </h2>
            </div>

            <div className="col-lg-4">
              <p className="wdx-desc mb-0">
                Technology selection depends on project scope,
                performance requirements and future scalability.
              </p>
            </div>
          </div>

          <div className="wdx-tool-grid">
            <div className="wdx-tool">
              <i className="bi bi-filetype-html"></i>
              <strong>HTML5</strong>
              <span>Semantic Structure</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-filetype-css"></i>
              <strong>CSS3</strong>
              <span>Modern Styling</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-bootstrap"></i>
              <strong>Bootstrap 5</strong>
              <span>Responsive UI</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-filetype-js"></i>
              <strong>JavaScript</strong>
              <span>Interactions</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-code-slash"></i>
              <strong>React</strong>
              <span>Dynamic Interfaces</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-wordpress"></i>
              <strong>WordPress</strong>
              <span>CMS Websites</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-filetype-php"></i>
              <strong>PHP</strong>
              <span>Backend Logic</span>
            </div>

            <div className="wdx-tool">
              <i className="bi bi-database"></i>
              <strong>MySQL</strong>
              <span>Data Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="wdx-section wdx-process" id="process">
        <div className="container">
          <div className="wdx-section-head">
            <div className="wdx-kicker">OUR PROCESS</div>

            <h2 className="wdx-title">
              From idea to
              <span>working experience.</span>
            </h2>
          </div>

          <div className="wdx-process-list">
            <div className="wdx-process-item">
              <div className="wdx-process-number">01</div>
              <div>
                <h3>Discovery & Requirements</h3>
                <p>
                  We understand your business, audience,
                  competitors, goals and required functionality.
                </p>
              </div>
              <div className="wdx-process-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="wdx-process-item">
              <div className="wdx-process-number">02</div>
              <div>
                <h3>Structure & UI Planning</h3>
                <p>
                  We organize pages, user flow, content hierarchy
                  and the visual direction of the website.
                </p>
              </div>
              <div className="wdx-process-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="wdx-process-item">
              <div className="wdx-process-number">03</div>
              <div>
                <h3>Development</h3>
                <p>
                  The approved direction is transformed into
                  responsive and functional website experiences.
                </p>
              </div>
              <div className="wdx-process-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="wdx-process-item">
              <div className="wdx-process-number">04</div>
              <div>
                <h3>Testing & Optimization</h3>
                <p>
                  We review responsive behaviour, functionality,
                  performance and essential user journeys.
                </p>
              </div>
              <div className="wdx-process-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="wdx-process-item">
              <div className="wdx-process-number">05</div>
              <div>
                <h3>Launch & Support</h3>
                <p>
                  After final approval, the website is prepared
                  for launch and agreed post-launch support.
                </p>
              </div>
              <div className="wdx-process-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="wdx-section wdx-pricing" id="pricing">
        <div className="container">
          <div className="wdx-section-head">
            <div className="wdx-kicker">WEBSITE PACKAGES</div>

            <h2 className="wdx-title">
              Clear starting points.
              <span>Flexible scope.</span>
            </h2>

            <p className="wdx-desc">
              These are sample starting packages. Final pricing
              should depend on pages, features, content, integrations
              and custom requirements.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="wdx-price-card">
                <div className="wdx-price-badge">STARTER</div>
                <h3>Essential Website</h3>
                <p>
                  For professionals and small businesses
                  needing a clean online presence.
                </p>

                <div className="wdx-price">
                  ₹14,999
                  <small>starting</small>
                </div>

                <ul className="wdx-price-list">
                  <li><i className="bi bi-check2"></i>Up to 5 pages</li>
                  <li><i className="bi bi-check2"></i>Responsive design</li>
                  <li><i className="bi bi-check2"></i>Contact form</li>
                  <li><i className="bi bi-check2"></i>Basic SEO setup</li>
                  <li><i className="bi bi-check2"></i>Social links</li>
                </ul>

                <a href="#contact" className="wdx-price-btn">
                  Start Project
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wdx-price-card featured">
                <div className="wdx-price-badge">MOST POPULAR</div>
                <h3>Business Growth</h3>
                <p>
                  For established businesses needing a
                  stronger premium digital presence.
                </p>

                <div className="wdx-price">
                  ₹29,999
                  <small>starting</small>
                </div>

                <ul className="wdx-price-list">
                  <li><i className="bi bi-check2"></i>Up to 10 pages</li>
                  <li><i className="bi bi-check2"></i>Premium custom UI</li>
                  <li><i className="bi bi-check2"></i>Responsive development</li>
                  <li><i className="bi bi-check2"></i>On-page SEO structure</li>
                  <li><i className="bi bi-check2"></i>WhatsApp integration</li>
                  <li><i className="bi bi-check2"></i>Speed optimization</li>
                </ul>

                <a href="#contact" className="wdx-price-btn">
                  Choose Growth
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wdx-price-card">
                <div className="wdx-price-badge">ADVANCED</div>
                <h3>Custom Platform</h3>
                <p>
                  For custom functionality, web applications
                  and advanced business requirements.
                </p>

                <div className="wdx-price">
                  Custom
                  <small>quote</small>
                </div>

                <ul className="wdx-price-list">
                  <li><i className="bi bi-check2"></i>Custom architecture</li>
                  <li><i className="bi bi-check2"></i>Advanced functionality</li>
                  <li><i className="bi bi-check2"></i>Database integration</li>
                  <li><i className="bi bi-check2"></i>Admin features</li>
                  <li><i className="bi bi-check2"></i>API possibilities</li>
                </ul>

                <a href="#contact" className="wdx-price-btn">
                  Request Quote
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="wdx-section wdx-deliverables">
        <div className="container">
          <div className="wdx-section-head">
            <div className="wdx-kicker">WHAT YOU RECEIVE</div>

            <h2 className="wdx-title">
              Built for launch.
              <span>Prepared for growth.</span>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="wdx-deliverable-card">
                <i className="bi bi-phone"></i>
                <h4>Responsive Website</h4>
                <p>
                  Layouts designed to adapt across
                  desktop, tablet and mobile devices.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="wdx-deliverable-card">
                <i className="bi bi-speedometer2"></i>
                <h4>Performance Focus</h4>
                <p>
                  Development decisions made with speed
                  and usability in mind.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="wdx-deliverable-card">
                <i className="bi bi-search"></i>
                <h4>SEO Foundation</h4>
                <p>
                  Clean page structure supporting essential
                  search optimization practices.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="wdx-deliverable-card">
                <i className="bi bi-headset"></i>
                <h4>Launch Guidance</h4>
                <p>
                  Support around final review, deployment
                  and agreed handover requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wdx-section wdx-faq">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className="wdx-kicker">COMMON QUESTIONS</div>

              <h2 className="wdx-title">
                Before we
                <span>start building.</span>
              </h2>

              <p className="wdx-desc mt-4">
                Quick answers about pricing, timelines,
                content and website ownership.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="wdx-faq-shell">
                <div className="accordion wdx-accordion" id="webDevFaq">
                  {faqData.map((item, index) => {
                    const isOpen = activeFaq === index;

                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                            type="button"
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                          >
                            {item.question}
                          </button>
                        </h2>

                        <div
                          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                        >
                          <div className="accordion-body">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wdx-final" id="contact">
        <div className="container">
          <div className="wdx-final-shell">
            <div className="row align-items-end g-4">
              <div className="col-lg-8">
                <h2>
                  Have an idea?
                  <span>Let’s make it usable.</span>
                </h2>

                <p>
                  Tell us about your business, website goals
                  and required features. We’ll help identify
                  a suitable direction for your project.
                </p>

                <a href="/contact" className="wdx-primary-btn">
                  Discuss Your Project
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>

              <div className="col-lg-4 text-lg-end">
                <div
                  style={{
                    color: "#7f878b",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1.3px",
                  }}
                >
                  DEZORA TECHNOLOGIES
                  <br />
                  <br />
                  WEB • SOFTWARE • MARKETING • EDUCATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevelopment;