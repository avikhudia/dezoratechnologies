import React, { useState } from "react";
import "./Before.css";

import beforeImg from "../assets/zavoragroupafter.webp";
import afterImg from "../assets/zavoragroupbefore.webp";

const Before = () => {
  const [isAfter, setIsAfter] = useState(true);

  const bgSmokeTexture =
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1500&q=80";

  return (
    <section className="beforeSection">
      <div className="beforeSection__container">
        <div className="beforeSection__preview">
          <div className="beforeSection__heroCard">
            <div className="beforeSection__bgImageWrap">
              <img
                src={bgSmokeTexture}
                alt="Dark aesthetic ambient texture background"
                className="beforeSection__bgImage"
              />
            </div>

            <div className="beforeSection__toggle">
              <button
                type="button"
                className={`beforeSection__toggleBtn ${
                  !isAfter ? "beforeSection__toggleBtn--active" : ""
                }`}
                onClick={() => setIsAfter(false)}
              >
                Before
              </button>

              <button
                type="button"
                className={`beforeSection__toggleBtn ${
                  isAfter ? "beforeSection__toggleBtn--active" : ""
                }`}
                onClick={() => setIsAfter(true)}
              >
                After
              </button>
            </div>

            <div className="beforeSection__mainGlass">
              <div className="beforeSection__mainGlassInner">
                <img
                  src={isAfter ? afterImg : beforeImg}
                  alt={isAfter ? "After Redesign Interface" : "Before Redesign Interface"}
                  className="beforeSection__mainImage"
                />
              </div>
            </div>

            <div className="beforeSection__statsRow">
              <div className="beforeSection__statCard">
                <div className="beforeSection__statValue">
                  <h3>72</h3>
                  <span>%</span>
                </div>
                <p>Increase in conversion rate</p>
              </div>

              <div className="beforeSection__statCard">
                <div className="beforeSection__statValue">
                  <h3>32</h3>
                  <span>%</span>
                </div>
                <p>Lower bounce after redesign</p>
              </div>

              <div className="beforeSection__statCard">
                <div className="beforeSection__statValue">
                  <h3>26.8</h3>
                  <span>%</span>
                </div>
                <p>Higher average order value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Before;