import React from 'react';
import "./Contactmeet.css"

const Contactmeet = () => {
  return (
    <section className="dzcontact-section">

      {/* Background Decoration */}
      <div className="dzcontact-bg-grid"></div>
      <div className="dzcontact-glow dzcontact-glow-one"></div>
      <div className="dzcontact-glow dzcontact-glow-two"></div>

     <div className="container position-relative">

  {/* Top Heading */}
  <div className="dzcontact-heading">

    <div className="dzcontact-kicker">
      <span></span>
      CONTACT DEZORA TECHNOLOGIES
    </div>

    <div className="row align-items-end g-4">

      <div className="col-lg-7">
        <h2>
          Let's Build Your
          <span> Next Digital Project.</span>
        </h2>
      </div>

      <div className="col-lg-5">
        <p>
          Looking for Website Development, Software Development,
          SEO, Google Ads, Digital Marketing, Branding or IT
          Training? Our experts are ready to help your business grow.
        </p>
      </div>

    </div>
  </div>


  {/* Contact Cards */}
  <div className="row g-4 dzcontact-row">

    {/* ================= PHONE ================= */}
    <div className="col-lg-4 col-md-6">

      <article className="dzcontact-card">

        <div className="dzcontact-card-no">01</div>

        <div className="dzcontact-icon-wrap">
          <div className="dzcontact-icon-ring"></div>

          <div className="dzcontact-icon">
            <i className="bi bi-telephone"></i>
          </div>
        </div>

        <span className="dzcontact-label">
          CALL US
        </span>

        <h3>Talk to Our Experts</h3>

        <p>
          Get expert guidance for website development,
          software solutions, SEO, digital marketing,
          branding, or professional IT training.
        </p>

        <a href="tel:+917837878383" className="dzcontact-link">
          <span>+91 78378 78383</span>
          <i className="bi bi-arrow-up-right"></i>
        </a>

        <div className="dzcontact-status">
          <span></span>
          AVAILABLE MONDAY - SATURDAY
        </div>

      </article>

    </div>


    {/* ================= LOCATION ================= */}
    <div className="col-lg-4 col-md-6">

      <article className="dzcontact-card dzcontact-card-featured">

        <div className="dzcontact-featured-badge">
          <span></span>
          VISIT OUR OFFICE
        </div>

        <div className="dzcontact-card-no">02</div>

        <div className="dzcontact-icon-wrap">
          <div className="dzcontact-icon-ring"></div>

          <div className="dzcontact-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
        </div>

        <span className="dzcontact-label">
          OFFICE LOCATION
        </span>

        <h3>Abohar, Punjab</h3>

        <p>
          Visit Dezora Technologies for business consultation,
          web development, digital marketing, software solutions,
          and practical IT training.
        </p>

        <a href="#" className="dzcontact-link">
          <span>Get Directions</span>
          <i className="bi bi-arrow-up-right"></i>
        </a>

        <div className="dzcontact-status">
          <span></span>
          ABOHAR • PUNJAB • INDIA
        </div>

      </article>

    </div>


    {/* ================= EMAIL ================= */}
    <div className="col-lg-4 col-md-12">

      <article className="dzcontact-card">

        <div className="dzcontact-card-no">03</div>

        <div className="dzcontact-icon-wrap">
          <div className="dzcontact-icon-ring"></div>

          <div className="dzcontact-icon">
            <i className="bi bi-envelope"></i>
          </div>
        </div>

        <span className="dzcontact-label">
          EMAIL SUPPORT
        </span>

        <h3>Send Us an Email</h3>

        <p>
          Send your project requirements, business enquiry,
          service request, or course enquiry and our team
          will contact you soon.
        </p>

        <a href="mailto:hello@dezora.in" className="dzcontact-link">
          <span>dezoratechnologies@gmail.com</span>
          <i className="bi bi-arrow-up-right"></i>
        </a>

        <div className="dzcontact-status">
          <span></span>
          RESPONSE WITHIN 24 HOURS
        </div>

      </article>

    </div>

  </div>


  {/* Bottom Strip */}
  {/* <div className="dzcontact-bottom">

    <div className="dzcontact-bottom-left">

      <div className="dzcontact-avatar-stack">
        <span>D</span>
        <span>Z</span>
        <span>+</span>
      </div>

      <div>
        <small>READY TO GROW YOUR BUSINESS?</small>
        <strong>Let's Create Something Amazing Together.</strong>
      </div>

    </div>

    <a href="#contact-form" className="dzcontact-main-btn">
      Get Free Consultation
      <span>
        <i className="bi bi-arrow-right"></i>
      </span>
    </a>

  </div> */}

</div>
    </section>
  );
};

export default Contactmeet;