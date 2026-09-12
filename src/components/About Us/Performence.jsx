import React, { useEffect, useRef } from "react";
import "./Performence.css";

const Performence = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationStarted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            animationStarted = true;

            // COUNTERS
            const counters = section.querySelectorAll(".dzimpact-counter");

            counters.forEach((counter) => {
              const target = parseInt(counter.dataset.target, 10);
              const duration = 1600;
              const startTime = performance.now();

              function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                counter.textContent = Math.floor(target * eased);

                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.textContent = target;
                }
              }

              requestAnimationFrame(updateCounter);
            });

            // CIRCLE PROGRESS
            const progressCircle = section.querySelector(
              ".dzimpact-progress-value"
            );

            if (progressCircle) {
              const progress = parseFloat(progressCircle.dataset.progress);
              const radius = progressCircle.r.baseVal.value;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (progress / 100) * circumference;

              progressCircle.style.strokeDasharray = circumference;
              progressCircle.style.strokeDashoffset = circumference;

              requestAnimationFrame(() => {
                progressCircle.style.strokeDashoffset = offset;
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dzimpact-section" ref={sectionRef}>
      <div className="container">
        <div className="dzimpact-top">
          <div>
            <span className="dzimpact-kicker">
              <i className="bi bi-stars"></i>
              PROOF IN PERFORMANCE
            </span>

            <h2>
              Built to create
              <span>measurable impact.</span>
            </h2>
          </div>

          <p>
            Technology, creativity and practical learning working together to
            move ideas forward.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <article className="dzimpact-card dzimpact-card-dark">
              <div className="dzimpact-grid"></div>
              <div className="dzimpact-glow"></div>

              <div className="dzimpact-code-lines">
                <span>01 / strategy</span>
                <span>02 / design</span>
                <span>03 / build</span>
                <span>04 / scale</span>
              </div>

              <div className="dzimpact-card-inner">
                <div className="dzimpact-progress-wrap">
                  <svg className="dzimpact-progress" viewBox="0 0 120 120">
                    <circle
                      className="dzimpact-progress-track"
                      cx="60"
                      cy="60"
                      r="50"
                    />
                    <circle
                      className="dzimpact-progress-value"
                      cx="60"
                      cy="60"
                      r="50"
                      data-progress="94"
                    />
                  </svg>

                  <div className="dzimpact-progress-center">
                    <strong>
                      <span className="dzimpact-counter" data-target="94">
                        0
                      </span>
                      %
                    </strong>
                    <small>SUCCESS</small>
                  </div>
                </div>

                <div className="dzimpact-card-content">
                  <span className="dzimpact-mini-label">
                    CLIENT EXPERIENCE
                  </span>

                  <h3>
                    Success built around
                    <span>real outcomes.</span>
                  </h3>

                  <p>
                    We combine strategy, design and technology to create digital
                    experiences focused on stronger performance and long-term
                    growth.
                  </p>

                  <div className="dzimpact-tags">
                    <span>Strategy</span>
                    <span>Design</span>
                    <span>Technology</span>
                  </div>
                </div>
              </div>

              <div className="dzimpact-card-footer">
                <div className="dzimpact-live">
                  <span></span>
                  PERFORMANCE ACTIVE
                </div>

                <div className="dzimpact-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-6">
            <article className="dzimpact-card dzimpact-card-light">
              <div className="dzimpact-network">
                <span className="dzimpact-net-line line-a"></span>
                <span className="dzimpact-net-line line-b"></span>
                <span className="dzimpact-net-line line-c"></span>

                <i className="dzimpact-node node-a"></i>
                <i className="dzimpact-node node-b"></i>
                <i className="dzimpact-node node-c"></i>
                <i className="dzimpact-node node-d"></i>
                <i className="dzimpact-node node-e"></i>
              </div>

              <div className="dzimpact-card-inner dzimpact-right-inner">
                <div className="dzimpact-big-stat">
                  <div className="dzimpact-stat-number">
                    <span className="dzimpact-counter" data-target="360">
                      0
                    </span>
                    <sup>°</sup>
                  </div>

                  <span className="dzimpact-mini-label">
                    DIGITAL CAPABILITY
                  </span>

                  <h3>
                    One ecosystem.
                    <span>Multiple possibilities.</span>
                  </h3>

                  <p>
                    From web development and digital marketing to creative
                    solutions and practical tech education — Dezora brings
                    everything together.
                  </p>
                </div>

                <div className="dzimpact-service-stack">
                  <div className="dzimpact-service-item">
                    <span>
                      <i className="bi bi-code-slash"></i>
                    </span>
                    <div>
                      <small>BUILD</small>
                      <strong>Web Solutions</strong>
                    </div>
                  </div>

                  <div className="dzimpact-service-item">
                    <span>
                      <i className="bi bi-graph-up-arrow"></i>
                    </span>
                    <div>
                      <small>GROW</small>
                      <strong>Digital Marketing</strong>
                    </div>
                  </div>

                  <div className="dzimpact-service-item">
                    <span>
                      <i className="bi bi-mortarboard"></i>
                    </span>
                    <div>
                      <small>LEARN</small>
                      <strong>Tech Education</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dzimpact-card-footer">
                <div className="dzimpact-live dzimpact-live-dark">
                  <span></span>
                  DEZORA ECOSYSTEM
                </div>

                <a href="#services" className="dzimpact-explore">
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performence;