import React from 'react';
import "./Map.css"

const Map = () => {
  return (
   <section className="dzmap-section" id="location">

  {/* Background Effects */}
  <div className="dzmap-grid-bg"></div>
  <div className="dzmap-orb dzmap-orb-one"></div>
  <div className="dzmap-orb dzmap-orb-two"></div>

  <div className="container position-relative">

    {/* =========================
         TOP HEADING
    ========================== */}
    <div className="dzmap-heading">

      <div className="row align-items-end g-4">

        <div className="col-lg-7">

          <div className="dzmap-kicker">
            <span></span>
            DEZORA TECHNOLOGIES LOCATION
          </div>

          <h2>
            Visit Our Office &
            <span> Let's Build Together.</span>
          </h2>

        </div>

        <div className="col-lg-5">
          <p>
            Meet our team for Website Development, Software Development,
            SEO, Google Ads, Digital Marketing, Branding, Graphic Design,
            and professional IT solutions in Abohar, Punjab.
          </p>
        </div>

      </div>

    </div>

    {/* =========================
         MAIN LOCATION EXPERIENCE
    ========================== */}
    <div className="dzmap-shell">

      <div className="row g-0 align-items-stretch">

        {/* LEFT MAP */}
        <div className="col-lg-8">

          <div className="dzmap-map-wrap">

            <iframe
              src="https://www.google.com/maps?q=Abohar,Punjab,India&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dezora Technologies Office Location"
            ></iframe>

            <div className="dzmap-map-shade"></div>
            <div className="dzmap-scan-line"></div>

            <div className="dzmap-map-label">
              <span className="dzmap-live-dot"></span>
              LIVE LOCATION
            </div>

            <div className="dzmap-location-hub">

              <div className="dzmap-hub-orbit dzmap-orbit-a">
                <span></span>
              </div>

              <div className="dzmap-hub-orbit dzmap-orbit-b">
                <span></span>
              </div>

              <div className="dzmap-pin-core">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

            </div>

            <div className="dzmap-floating-info">

              <div className="dzmap-floating-icon">
                <i className="bi bi-building"></i>
              </div>

              <div>
                <small>DEZORA TECHNOLOGIES</small>
                <strong>Abohar, Punjab</strong>
              </div>

              <span className="dzmap-floating-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </span>

            </div>

            <div className="dzmap-coordinates">
              <span>30.1453° N</span>
              <i></i>
              <span>74.1993° E</span>
            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="col-lg-4">

          <aside className="dzmap-info-panel">

            <div className="dzmap-panel-number">
              01 / OFFICE
            </div>

            <div className="dzmap-panel-icon">

              <div className="dzmap-panel-icon-ring"></div>

              <span>
                <i className="bi bi-compass"></i>
              </span>

            </div>

            <div className="dzmap-panel-content">

              <span className="dzmap-small-label">
                VISIT DEZORA
              </span>

              <h3>
                Your Trusted
                <span> Digital Partner.</span>
              </h3>

              <p>
                Visit our office for Website Development,
                Software Development, SEO, Google Ads,
                Digital Marketing, Branding, Graphic Design,
                and business consultation services.
              </p>

            </div>

            <div className="dzmap-address-box">

              <div className="dzmap-address-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div>
                <small>OFFICE ADDRESS</small>
                <strong>Abohar, Punjab</strong>
                <span>India</span>
              </div>

            </div>

            <div className="dzmap-availability">

              <div>
                <span className="dzmap-status-dot"></span>

                <div>
                  <small>OFFICE STATUS</small>
                  <strong>Open for Business</strong>
                </div>

              </div>

              <span className="dzmap-time">
                09:00 AM - 06:00 PM
              </span>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Abohar+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="dzmap-direction-btn"
            >
              <span>Get Directions</span>
              <i className="bi bi-arrow-up-right"></i>
            </a>

            <div className="dzmap-panel-footer">
              <i className="bi bi-car-front"></i>
              <span>
                Easy to Find • Appointment Recommended
              </span>
            </div>

          </aside>

        </div>

      </div>

    </div>

    {/* =========================
         BOTTOM CONTACT
    ========================== */}

    <div className="dzmap-quick-row">

      <a href="tel:+917837878383" className="dzmap-quick-item">

        <span className="dzmap-quick-icon">
          <i className="bi bi-telephone"></i>
        </span>

        <div>
          <small>CALL US</small>
          <strong>+91 78378 78383</strong>
        </div>

        <i className="bi bi-arrow-up-right dzmap-quick-arrow"></i>

      </a>

      <div className="dzmap-quick-divider"></div>

      <a href="mailto:hello@dezora.in" className="dzmap-quick-item">

        <span className="dzmap-quick-icon">
          <i className="bi bi-envelope"></i>
        </span>

        <div>
          <small>EMAIL US</small>
          <strong>hello@dezora.in</strong>
        </div>

        <i className="bi bi-arrow-up-right dzmap-quick-arrow"></i>

      </a>

      <div className="dzmap-quick-divider"></div>

      <a href="#contact-form" className="dzmap-quick-item">

        <span className="dzmap-quick-icon">
          <i className="bi bi-stars"></i>
        </span>

        <div>
          <small>FREE CONSULTATION</small>
          <strong>Start Your Project</strong>
        </div>

        <i className="bi bi-arrow-up-right dzmap-quick-arrow"></i>

      </a>

    </div>

  </div>

</section>
  );
};

export default Map;