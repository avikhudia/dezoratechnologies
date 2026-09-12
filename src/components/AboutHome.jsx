import React, { useEffect, useState } from "react";

function About() {
  const imageSlides = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % imageSlides.length);
    }, 3200);

    return () => clearInterval(slideTimer);
  }, [imageSlides.length]);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: #18324b;
        }

        .inst-fluid-img {
          display: block;
          max-width: 100%;
        }

        .inst-hero-wrapper {
          position: relative;
          overflow: hidden;
          padding: 50px 0 40px 0;
        }

        .inst-hero-wrapper::before,
        .inst-hero-wrapper::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          pointer-events: none;
        }

        .inst-hero-wrapper::before {
          width: 320px;
          height: 320px;
          top: -100px;
          left: -120px;
        }

        .inst-hero-wrapper::after {
          width: 300px;
          height: 300px;
          right: -90px;
          bottom: -90px;
          background: rgba(255, 201, 223, 0.5);
        }

        .inst-custom-container {
          width: 100%;
          max-width: 1240px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 20px;
          padding-left: 20px;
          position: relative;
          z-index: 1;
        }

        .inst-split-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: 32px;
        }

        .inst-content-col {
          min-width: 0;
        }

        .inst-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(24, 50, 75, 0.08);
          box-shadow: 0 10px 25px rgba(19, 41, 65, 0.05);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .inst-main-heading {
          font-size: clamp(1.2rem, 4.5vw, 2.8rem);
          line-height: 1.1;
          font-weight: 800;
          color: #12263a;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .inst-sub-paragraph {
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.8;
          color: #55677d;
          max-width: 540px;
          margin-bottom: 36px;
        }

        .inst-action-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .inst-action-group a {
          text-decoration: none;
          min-height: 56px;
          padding: 14px 32px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .inst-btn-outline {
          background: #ffffff;
          color: #18324b;
          border: 2px solid #e2ecf8;
          box-shadow: 0 8px 20px rgba(24, 50, 75, 0.04);
        }

        .inst-btn-outline:hover {
          background: #18324b;
          color: #ffffff;
          border-color: #18324b;
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(24, 50, 75, 0.15);
        }

        .inst-btn-solid-green {
          background: linear-gradient(135deg, #25d366 0%, #11b84f 100%);
          color: #ffffff;
          border: none;
          box-shadow: 0 10px 25px rgba(23, 191, 82, 0.3);
        }

        .inst-btn-solid-green:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(23, 191, 82, 0.45);
          background: linear-gradient(135deg, #2cf577 0%, #13cc58 100%);
        }

        .inst-media-col {
          min-width: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .inst-visual-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .inst-slider-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.6;
          overflow: hidden;
          border-radius: 10px;
          background: #d9e7f8;
          box-shadow: 0 20px 45px rgba(14, 35, 58, 0.14);
        }

        .inst-carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transform: scale(1.03);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .inst-carousel-slide.inst-slide-visible {
          opacity: 1;
          transform: scale(1);
        }

        .inst-indicator-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 4;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
        }

        .inst-dot-node {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .inst-dot-node.inst-dot-highlighted {
          width: 26px;
          background: #fff;
        }

        .inst-badge-popup {
          position: absolute;
          z-index: 5;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 45px rgba(14, 35, 58, 0.12);
          border-radius: 20px;
          padding: 14px 22px;
        }

        .inst-popup-top-right {
          top: 32px;
          right: -18px;
          animation: instAnimFloatUp 4.8s ease-in-out infinite;
        }

        .inst-popup-bottom-left {
          left: -18px;
          bottom: 32px;
          animation: instAnimFloatDown 5.4s ease-in-out infinite;
        }

        .inst-popup-top-right h2,
        .inst-popup-bottom-left h4 {
          font-size: 16px;
          color: #18324b;
          font-weight: 700;
          letter-spacing: -0.2px;
          white-space: nowrap;
          margin: 0;
        }

        @keyframes instAnimFloatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes instAnimFloatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }

        @media (max-width: 1199px) {
          .inst-visual-container {
            max-width: 360px;
          }

          .inst-popup-top-right {
            right: -8px;
          }

          .inst-popup-bottom-left {
            left: -8px;
          }
        }

        @media (max-width: 991px) {
          .inst-split-layout {
            grid-template-columns: 1fr;
          }

          .inst-content-col {
            text-align: center;
          }

          .inst-sub-paragraph {
            margin-left: auto;
            margin-right: auto;
          }

          .inst-action-group {
            justify-content: center;
          }

          .inst-visual-container {
            max-width: 340px;
            margin: 36px auto 0;
          }

          .inst-slider-box {
            aspect-ratio: 1 / 1.15;
          }
        }

        @media (max-width: 767px) {
          .inst-hero-wrapper {
            padding: 40px 0 60px;
          }

          .inst-main-heading {
            font-size: clamp(1.8rem, 7.5vw, 2.4rem;
          }

          .inst-sub-paragraph {
            font-size: 14.5px;
            margin-bottom: 28px;
          }

          .inst-action-group {
            flex-direction: column;
            gap: 14px;
            width: 100%;
          }

          .inst-action-group a {
            width: 100%;
            min-height: 54px;
            text-align: center;
          }

          .inst-visual-container {
            max-width: 300px;
          }

          .inst-slider-box {
            aspect-ratio: 1 / 1.12;
            border-radius: 22px;
          }

          .inst-popup-top-right {
            top: 16px;
            right: -4px;
          }

          .inst-popup-bottom-left {
            left: -4px;
            bottom: 16px;
          }

          .inst-popup-top-right h2,
          .inst-popup-bottom-left h4 {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .inst-custom-container {
            padding-right: 16px;
            padding-left: 16px;
          }

          .inst-visual-container {
            max-width: 260px;
          }

          .inst-slider-box {
            aspect-ratio: 1 / 1.08;
            border-radius: 18px;
          }

          .inst-popup-top-right {
            right: 4px;
            top: 12px;
            padding: 10px 14px;
          }

          .inst-popup-bottom-left {
            left: 4px;
            bottom: 12px;
            padding: 10px 14px;
          }
        }

        @media (hover: none) {
          .inst-btn-outline:hover,
          .inst-btn-solid-green:hover {
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="inst-hero-wrapper">
        <div className="inst-custom-container">
          <div className="inst-split-layout">
            <div className="inst-content-col">
  <div className="inst-tag-badge">
    <span></span>
    <span>Trusted Digital Agency • Web, Marketing & Branding</span>
  </div>

  <h1 className="inst-main-heading">
    Transform Your Business with Creative Digital Solutions
  </h1>

  <p className="inst-sub-paragraph">
    At <strong>Dezora Technologies</strong>, we help businesses grow with
    custom website design, web development, graphic design, digital marketing,
    SEO, and professional video editing. Our innovative strategies and
    creative solutions are designed to strengthen your online presence,
    generate quality leads, and drive measurable business growth.
  </p>

  <div className="inst-action-group">
    <a href="#services" className="inst-btn-outline">
      Explore Services
    </a>

    <a
      href="https://wa.me/911234567890"
      className="inst-btn-solid-green"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Free Consultation
    </a>
  </div>
</div>

            <div className="inst-media-col">
              <div className="inst-visual-container">
                <div className="inst-slider-box">
                  {imageSlides.map((imageUrl, slideIndex) => (
                    <img
                      key={slideIndex}
                      src={imageUrl}
                      alt={`Students slide ${slideIndex + 1}`}
                      className={`inst-carousel-slide ${
                        slideIndex === activeSlide ? "inst-slide-visible" : ""
                      }`}
                    />
                  ))}

                  <div className="inst-indicator-dots">
                    {imageSlides.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        className={`inst-dot-node ${
                          dotIndex === activeSlide ? "inst-dot-highlighted" : ""
                        }`}
                        onClick={() => setActiveSlide(dotIndex)}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="inst-badge-popup inst-popup-top-right">
                  <h2>Admissions Open</h2>
                </div>

                <div className="inst-badge-popup inst-popup-bottom-left">
                  <h4>Student Trusted</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;