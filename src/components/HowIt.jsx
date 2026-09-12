import React from "react";
import "./HowIt.css"

const HowIt = () => {
  return (
    <section className="dz-capability-section position-relative overflow-hidden">
  {/* Background Effects */}
  <div className="dz-grid-bg"></div>
  <div className="dz-glow dz-glow-one"></div>
  <div className="dz-glow dz-glow-two"></div>

  <div className="container position-relative">
    <div className="row align-items-center g-5">

      {/* LEFT SIDE */}
      <div className="col-lg-6">
        <div className="dz-engine-wrap">

          {/* Top Badge */}
          <div className="dz-floating-badge">
            <span className="dz-live-dot"></span>
            DIGITAL SOLUTIONS
          </div>

          {/* Main Dashboard */}
          <div className="dz-engine-card">

            {/* Header */}
            <div className="dz-engine-header">
              <div>
                <span className="dz-mini-label">DEZORA TECHNOLOGIES</span>
                <h3>Web & Digital Services</h3>
              </div>

              <div className="dz-window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Center Core */}
            <div className="dz-core-area">
              <div className="dz-orbit orbit-one"></div>
              <div className="dz-orbit orbit-two"></div>

              <div className="dz-core">
                <div className="dz-core-inner">
                  <span>DX</span>
                </div>
              </div>

              {/* Floating Service Nodes */}
              <div className="dz-node node-1">
                <i className="bi bi-code-slash"></i>
                <span>WEB</span>
              </div>

              <div className="dz-node node-2">
                <i className="bi bi-megaphone"></i>
                <span>SEO</span>
              </div>

              <div className="dz-node node-3">
                <i className="bi bi-palette2"></i>
                <span>BRAND</span>
              </div>

              <div className="dz-node node-4">
                <i className="bi bi-mortarboard"></i>
                <span>LEARN</span>
              </div>
            </div>

            {/* Stats */}
            <div className="row g-3 dz-stats-row">
              <div className="col-4">
                <div className="dz-stat-box">
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>

              <div className="col-4">
                <div className="dz-stat-box">
                  <strong>360°</strong>
                  <span>Services</span>
                </div>
              </div>

              <div className="col-4">
                <div className="dz-stat-box">
                  <strong>100%</strong>
                  <span>Quality</span>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Mini Card */}
          <div className="dz-mini-card">
            <div className="dz-mini-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <div>
              <small>BUSINESS GROWTH</small>
              <strong>Build • Optimize • Grow</strong>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="dz-bottom-area">
          <a href="#contact" className="dz-main-btn">
            Start Your Project
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </a>

          <div className="dz-trust-info">
            <div className="dz-trust-icon">
              <i className="bi bi-chat-dots"></i>
            </div>
            <div>
              <small>FREE CONSULTATION</small>
              <strong>Talk to our experts</strong>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6">

        <div className="dz-content">

          <div className="dz-eyebrow">
            <span></span>
            OUR PROCESS
          </div>

          <h2>
            Website Development &
            <span> Digital Growth Solutions</span>
          </h2>

          <p className="dz-intro">
            We create websites, SEO strategies, digital marketing, branding,
            and software solutions that help businesses grow online.
          </p>

          {/* Process Items */}
          <div className="dz-process-list">

            {/* Item 1 */}
            <div className="dz-process-item active">

              <div className="dz-process-number">01</div>

              <div className="dz-process-content">
                <h4>Understand Your Business</h4>
                <p>
                  We understand your goals and create the right digital strategy.
                </p>
              </div>

              <div className="dz-process-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>

            {/* Item 2 */}
            <div className="dz-process-item">

              <div className="dz-process-number">02</div>

              <div className="dz-process-content">
                <h4>Design & Develop</h4>
                <p>
                  We build responsive websites, branding, and software solutions.
                </p>
              </div>

              <div className="dz-process-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>

            {/* Item 3 */}
            <div className="dz-process-item">

              <div className="dz-process-number">03</div>

              <div className="dz-process-content">
                <h4>Launch & Grow</h4>
                <p>
                  We optimize SEO, marketing, and performance for long-term growth.
                </p>
              </div>

              <div className="dz-process-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>
  );
};

export default HowIt;