import React from "react";
import "./Co.css";

const Co = () => {
  return (
    <section className="founders-section">
      <div className="container founders-container">
        {/* =================================
            TOP FOUNDERS VISUAL
        ================================== */}
        <div className="founders-visual">
          <div className="visual-panel"></div>

          {/* Left Name */}
          <div className="founder-name left-name">
            <span className="name-arrow"></span>
            Narinder
          </div>

          {/* Right Name */}
          <div className="founder-name right-name">
            <span className="name-arrow"></span>
            Avinash
          </div>

          {/* Founder 1 */}
          <div className="founder-person founder-left">
            <img src="/assets/images/character.png" alt="Narinder" />
          </div>

          {/* Founder 2 */}
          <div className="founder-person founder-right">
            <img src="/assets/images/character.png" alt="Avinash" />
          </div>

          {/* Premium Rotating Center Badge */}
          <div className="creative-badge">
            <svg className="badge-text-ring" viewBox="0 0 100 100">
              <defs>
                <path
                  id="badgeCirclePath"
                  d="M 50,50
                     m -34,0
                     a 34,34 0 1,1 68,0
                     a 34,34 0 1,1 -68,0"
                />
              </defs>

              <text>
                <textPath href="#badgeCirclePath" startOffset="0%">
                  DEZORA • TECHNOLOGIES • DEZORA •
                </textPath>
              </text>
            </svg>

            <div className="badge-center">
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>

        {/* =================================
            INTRO TEXT
        ================================== */}
        <div className="founders-intro px-2">
  <p>
    <strong>Dezora Technologies</strong> was founded by <strong>Avinash Khudia</strong> and <strong>Narinder Yadav</strong>, two passionate digital professionals with over <strong>5 years of industry experience</strong>. Together, we have helped businesses build a strong online presence through <strong>website development, custom software development, SEO, Google Ads, social media marketing, graphic design, video editing, branding, and digital marketing solutions</strong>. Along with delivering professional IT services, we are committed to empowering students through practical technology training and helping businesses achieve sustainable digital growth with innovative, reliable, and result-driven solutions.
  </p>
</div>

        {/* =================================
            ABOUT FOUNDERS BOX
        ================================== */}
       <div className="founders-box">
  <div className="box-label">
    <span className="label-dot"></span>
    <span>THE MINDS BEHIND DEZORA</span>
    <span className="label-line"></span>
  </div>

  <div className="row g-3">

    {/* Founder Card 1 */}
    <div className="col-lg-6 col-md-6">
      <article className="founder-card green-card">
        <span className="card-orbit orbit-one"></span>
        <span className="card-orbit orbit-two"></span>

        <div className="founder-card-content">
          <div className="founder-top">
            <div className="founder-meta">

              <span className="founder-role">
                Founder &amp; CEO
              </span>

              <span className="status-pill">
                <i></i>
                Leadership
              </span>

            </div>
          </div>

          <div className="founder-main">

            <span className="founder-small-label">
              THE FOUNDER
            </span>

            <h3>Avinash Khudia</h3>

            <p>
              <strong>Avinash Khudia</strong> is the
              <strong> Founder &amp; CEO</strong> of
              <strong> Dezora Technologies</strong>.
              With over <strong>5 years of professional experience</strong>,
              he leads the company with expertise in
              <strong> Website Development, Custom Software Development,
              SEO, Google Ads, Digital Marketing, Branding, Graphic Design,
              Video Editing, UI/UX Design,</strong> and innovative digital
              solutions. He is responsible for company strategy, client
              success, project management, and building high-performance
              digital experiences that help businesses grow online.
            </p>

          </div>

          <div className="founder-footer">

            <a href="#" className="profile-link">
              <span>View Profile</span>

              <span className="profile-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            <a
              href="#"
              className="linkedin-btn"
              aria-label="Avinash Khudia LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

          </div>
        </div>
      </article>
    </div>



    {/* Founder Card 2 */}
    <div className="col-lg-6 col-md-6">
      <article className="founder-card orange-card">
        <span className="card-orbit orbit-one"></span>
        <span className="card-orbit orbit-two"></span>

        <div className="founder-card-content">
          <div className="founder-top">
            <div className="founder-meta">

              <span className="founder-role">
                Co-Founder &amp; Director
              </span>

              <span className="status-pill">
                <i></i>
                Management
              </span>

            </div>
          </div>

          <div className="founder-main">

            <span className="founder-small-label">
              THE CO-FOUNDER
            </span>

            <h3>Narinder Yadav</h3>

            <p>
              <strong>Narinder Yadav</strong> is the
              <strong> Co-Founder &amp; Director</strong> of
              <strong> Dezora Technologies</strong>.
              With more than <strong>5 years of industry experience</strong>,
              he specializes in
              <strong> Website Development, Software Solutions,
              SEO, Digital Marketing, Branding, Business Strategy,
              and Creative Technology Services.</strong>
              Working closely with the leadership team, he ensures
              quality execution, innovation, client satisfaction,
              and sustainable business growth through reliable
              digital solutions.
            </p>

          </div>

          <div className="founder-footer">

            <a href="#" className="profile-link">
              <span>View Profile</span>

              <span className="profile-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            <a
              href="#"
              className="linkedin-btn"
              aria-label="Narinder Yadav LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

          </div>
        </div>
      </article>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default Co;