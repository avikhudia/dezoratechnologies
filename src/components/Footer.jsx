import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="dc-page-wrapper">
      <footer className="dezora-cyber-ft">
        <div className="dc-footer-inner">

          <div className="dc-footer-grid">

            {/* Brand */}
            <div className="dc-footer-col dc-footer-brand-col">

              <a href="/" className="dc-brand">
                DEZORA<span>_</span>
              </a>

              <p className="dc-brand-desc">
                Dezora Technologies is a leading Website Design, Web Development,
                SEO, Google Ads, Branding, Graphic Design, Video Editing and
                Software Development company helping businesses build a powerful
                online presence and achieve measurable growth.
              </p>

              <div className="dc-social-wrap">
                <a href="https://facebook.com" className="dc-social-item">
                  <FaFacebookF />
                </a>

                <a href="https://instagram.com" className="dc-social-item">
                  <FaInstagram />
                </a>

                <a href="https://linkedin.com" className="dc-social-item">
                  <FaLinkedinIn />
                </a>

                <a href="https://youtube.com" className="dc-social-item">
                  <FaYoutube />
                </a>
              </div>

            </div>

            {/* Services */}

            <div className="dc-footer-col">

              <h6 className="dc-grid-title">
                Our Services
              </h6>

              <ul className="dc-links">

                <li>
                  <a href="#">
                    <FaChevronRight />
                    Website Design
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaChevronRight />
                    Website Development
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaChevronRight />
                    SEO Optimization
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaChevronRight />
                    Google Ads
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaChevronRight />
                    Graphic Design
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaChevronRight />
                    Software Development
                  </a>
                </li>

              </ul>

            </div>

            {/* Quick Links */}

            <div className="dc-footer-col">

              <h6 className="dc-grid-title">
                Quick Links
              </h6>

              <ul className="dc-links">

                <li>
                  <a href="#home">
                    <FaChevronRight />
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about">
                    <FaChevronRight />
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#services">
                    <FaChevronRight />
                    Services
                  </a>
                </li>

                <li>
                  <a href="#portfolio">
                    <FaChevronRight />
                    Portfolio
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    <FaChevronRight />
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#faq">
                    <FaChevronRight />
                    FAQ
                  </a>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div className="dc-footer-col dc-footer-news-col">

              <h6 className="dc-grid-title">
                Contact Us
              </h6>

              <p className="dc-news-desc">
                Ready to grow your business? Contact our experts today for a
                free consultation.
              </p>

              <ul className="dc-links">

                <li>
                  <a href="tel:+919876543210">
                    <FaPhoneAlt />
                    +91 78378 78383
                  </a>
                </li>

                <li>
                  <a href="mailto:info@dezoratechnologies.com">
                    <FaEnvelope />
                    info@dezoratechnologies.com
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaMapMarkerAlt />
                    Abohar, Punjab, India
                  </a>
                </li>

              </ul>

              <form
                className="dc-newsletter-card"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />

                <button
                  type="submit"
                  className="dc-subscribe-btn"
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>

          <div className="dc-floor-divider"></div>

          <div className="dc-floor-flex dc-floor-text">

            <span className="dc-copy">
              © 2026 <strong>Dezora Technologies</strong>. All Rights Reserved.
            </span>

            <div className="dc-floor-links">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms & Conditions
              </a>

              <a href="#">
                Refund Policy
              </a>

            </div>

          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;