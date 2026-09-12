import React from 'react';
import "./Form.css"

const Form = () => {
  return (
    <section className="dzform-section" id="contact-form">

      {/* Decorative Background */}
      <div className="dzform-grid"></div>
      <div className="dzform-orb dzform-orb-one"></div>
      <div className="dzform-orb dzform-orb-two"></div>

      <div className="container position-relative">

        <div className="row g-4 g-xl-5 align-items-stretch">

  {/* =================================================
       LEFT CONTENT
  ================================================== */}
  <div className="col-lg-5">

    <div className="dzform-intro">

      {/* Kicker */}
      <div className="dzform-kicker">
        <span className="dzform-kicker-line"></span>
        CONTACT DEZORA TECHNOLOGIES
      </div>

      {/* Heading */}
      <h2>
        Let's Build Your
        <span> Digital Success.</span>
      </h2>

      <p className="dzform-intro-text">
        Looking for website development, SEO, digital marketing,
        branding, or software solutions? Share your project and
        our experts will help you grow your business.
      </p>

      {/* =========================================
           AVAILABILITY VISUAL
      ========================================== */}
      <div className="dzform-availability">

        {/* animated rings */}
        <div className="dzform-ring dzform-ring-one"></div>
        <div className="dzform-ring dzform-ring-two"></div>

        {/* center */}
        <div className="dzform-availability-core p-2">
          <span className="dzform-live-dot"></span>

        

          <strong>
            Ready for
            <br />
            your next project
          </strong>
        </div>

        {/* floating labels */}
        <div className="dzform-float-tag dzform-tag-one">
          <i className="bi bi-code-slash"></i>
          Web Dev
        </div>

        <div className="dzform-float-tag dzform-tag-two">
          <i className="bi bi-graph-up-arrow"></i>
          SEO
        </div>

        <div className="dzform-float-tag dzform-tag-three">
          <i className="bi bi-palette2"></i>
          Branding
        </div>

        <div className="dzform-float-tag dzform-tag-four">
          <i className="bi bi-megaphone"></i>
          Marketing
        </div>

      </div>

      {/* Bottom Trust */}
      <div className="dzform-trust">

        <div className="dzform-trust-icon">
          <i className="bi bi-shield-check"></i>
        </div>

        <div>
          <small>100% CONFIDENTIAL</small>
          <strong>
            Secure consultation with no spam.
          </strong>
        </div>

      </div>

    </div>

  </div>

          {/* =================================================
               RIGHT FORM
          ================================================== */}
          <div className="col-lg-7">

            <div className="dzform-card">

              {/* Card Header */}
              <div className="dzform-card-header">

                <div>
                 <span>CONTACT DEZORA TECHNOLOGIES</span>
<h3>Let's Discuss Your Project or Course.</h3>
                </div>

                <div className="dzform-header-mark">
                  DZ
                </div>

              </div>


              {/* FORM */}
              <form className="dzform-main" id="dezoraContactForm" noValidate>

                {/* Name + Email */}
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="dzform-field">
                      <input
                        type="text"
                        id="dzName"
                        name="name"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="dzName">
                        Your name
                      </label>
                      <span className="dzform-field-icon">
                        <i className="bi bi-person"></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dzform-field">
                      <input
                        type="email"
                        id="dzEmail"
                        name="email"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="dzEmail">
                        Email address
                      </label>
                      <span className="dzform-field-icon">
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                  </div>

                </div>


                {/* Phone + Company */}
                <div className="row g-3 mt-1">

                  <div className="col-md-6">
                    <div className="dzform-field">
                      <input
                        type="tel"
                        id="dzPhone"
                        name="phone"
                        placeholder=" "
                      />
                      <label htmlFor="dzPhone">
                        Phone number
                      </label>
                      <span className="dzform-field-icon">
                        <i className="bi bi-telephone"></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dzform-field">
                      <input
                        type="text"
                        id="dzCompany"
                        name="company"
                        placeholder=" "
                      />
                      <label htmlFor="dzCompany">
                        Company / Brand
                      </label>
                      <span className="dzform-field-icon">
                        <i className="bi bi-building"></i>
                      </span>
                    </div>
                  </div>

                </div>


                {/* =====================================
                     SERVICE SELECTION
                ====================================== */}
               <div className="dzform-group-block">

  <div className="dzform-group-title">
    <span>01</span>
    <div>
      <strong>Select Required Service</strong>
      <small>Choose one or more services</small>
    </div>
  </div>

  <div className="dzform-service-options">

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Website Development" />
      <span>
        <i className="bi bi-code-slash"></i>
        Website Development
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Software Development" />
      <span>
        <i className="bi bi-window-stack"></i>
        Software Development
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="SEO Services" />
      <span>
        <i className="bi bi-search"></i>
        SEO Services
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Google Ads" />
      <span>
        <i className="bi bi-badge-ad"></i>
        Google Ads
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Social Media Marketing" />
      <span>
        <i className="bi bi-instagram"></i>
        Social Media Marketing
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Graphic Design" />
      <span>
        <i className="bi bi-palette2"></i>
        Graphic Design
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Video Editing" />
      <span>
        <i className="bi bi-camera-video"></i>
        Video Editing
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="services[]" value="Branding" />
      <span>
        <i className="bi bi-stars"></i>
        Branding
      </span>
    </label>

  </div>

</div>


                {/* =====================================
                     BUDGET
                ====================================== */}
               <div className="dzform-group-block">

  <div className="dzform-group-title">
    <span>02</span>
    <div>
      <strong>Select Training Course</strong>
      <small>Choose your preferred course</small>
    </div>
  </div>

  <div className="dzform-service-options">

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Basic Computer" />
      <span>
        <i className="bi bi-pc-display"></i>
        Basic Computer
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Web Development" />
      <span>
        <i className="bi bi-code-slash"></i>
        Web Development
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Digital Marketing" />
      <span>
        <i className="bi bi-graph-up-arrow"></i>
        Digital Marketing
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Graphic Design" />
      <span>
        <i className="bi bi-palette2"></i>
        Graphic Design
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Video Editing" />
      <span>
        <i className="bi bi-camera-video"></i>
        Video Editing
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="MS Office" />
      <span>
        <i className="bi bi-file-earmark-word"></i>
        MS Office
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="Advanced Excel" />
      <span>
        <i className="bi bi-file-earmark-excel"></i>
        Advanced Excel
      </span>
    </label>

    <label className="dzform-choice">
      <input type="checkbox" name="courses[]" value="AI Tools" />
      <span>
        <i className="bi bi-cpu"></i>
        AI Tools
      </span>
    </label>

  </div>

</div>


                {/* =====================================
                     MESSAGE
                ====================================== */}
                <div className="dzform-message-field">
                  <textarea
                    id="dzMessage"
                    name="message"
                    rows="5"
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="dzMessage">
                    Describe your project, service requirement, or course enquiry...
                  </label>
                  <span className="dzform-message-icon">
                    <i className="bi bi-chat-left-text"></i>
                  </span>
                </div>


                {/* =====================================
                     SUBMIT AREA
                ====================================== */}
                <div className="dzform-submit-area">

                  <div className="dzform-submit-note">
                    <i className="bi bi-clock"></i>
                    <span>
                    Free consultation with a quick response.
                      
                    </span>
                  </div>

                  <button type="submit" className="dzform-submit-btn">
                    <span className="dzform-btn-text">
                    Send Request
                    </span>
                    <span className="dzform-btn-icon">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </button>

                </div>


                {/* Success Message */}
                <div className="dzform-success" id="dzFormSuccess">
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <div>
                    <strong>Enquiry ready.</strong>
                    <small>
                      Connect this form with PHP or your email API for real submissions.
                    </small>
                  </div>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Form;