import React from "react";
import { FaUsers, FaHeart } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const AboutHero = () => {
  return (
    <>
      <style>{`
        .we-are-section {
          --wa-orange: #ff5a00;
          --wa-black: #050505;
          --wa-bg: #f8f6f2;

          position: relative;
          width: 100%;
          overflow: hidden;
          isolation: isolate;
          padding: 0;
          background:
            radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, .15) 0%,
              rgba(248, 246, 242, .35) 45%,
              rgba(248, 246, 242, .96) 88%
            ),
            var(--wa-bg);
        }

        .we-are-section .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(174, 145, 116, .15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(174, 145, 116, .15) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image:
            radial-gradient(
              ellipse 58% 72% at center,
              #000 0%,
              #000 48%,
              rgba(0, 0, 0, .75) 65%,
              transparent 100%
            );
          mask-image:
            radial-gradient(
              ellipse 58% 72% at center,
              #000 0%,
              #000 48%,
              rgba(0, 0, 0, .75) 65%,
              transparent 100%
            );
        }

        .grid-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(165, 132, 101, .22) 0 2.2px, transparent 2.8px);
          background-size: 48px 48px;
          background-position: 0 0;
        }

        .grid-bg::after {
          content: "";
          position: absolute;
          inset: -2px;
          background:
            linear-gradient(
              90deg,
              var(--wa-bg) 0%,
              rgba(248, 246, 242, .92) 8%,
              rgba(248, 246, 242, .25) 24%,
              transparent 39%,
              transparent 61%,
              rgba(248, 246, 242, .25) 76%,
              rgba(248, 246, 242, .92) 92%,
              var(--wa-bg) 100%
            );
        }

        .we-wrapper {
          position: relative;
          z-index: 2;
          width: min(100%, 1180px);
          min-height: 460px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .we-text {
          position: relative;
          z-index: 2;
          text-align: center;
          user-select: none;
        }

        .we-text h2 {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          font-size: clamp(130px, 13vw, 205px);
          font-weight: 900;
          line-height: .74;
          letter-spacing: -12px;
          color: var(--wa-black);
        }

        .we-text .line1,
        .we-text .line2 {
          position: relative;
          z-index: 1;
        }

        .creative-badge {
          position: absolute;
          top: 49%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          z-index: 6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-text-ring {
          width: 100%;
          height: 100%;
          animation: badgeRotate 11s linear infinite;
        }

        .badge-text-ring text {
          fill: var(--wa-orange);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .badge-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: var(--wa-orange);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 14px 30px rgba(255, 90, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, .25);
        }

        .badge-center svg {
          font-size: 30px;
        }

        .info-card {
          position: absolute;
          z-index: 8;
          min-height: 72px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 10px 18px 10px 10px;
          border-radius: 999px;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, .99),
              rgba(250, 250, 250, .95)
            );
          border: 1px solid rgba(0, 0, 0, .055);
          box-shadow:
            0 22px 45px rgba(0, 0, 0, .11),
            0 5px 14px rgba(0, 0, 0, .05),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition:
            transform .4s cubic-bezier(.22, 1, .36, 1),
            box-shadow .4s ease;
        }

        .info-card:hover {
          box-shadow:
            0 30px 60px rgba(0, 0, 0, .16),
            0 8px 20px rgba(0, 0, 0, .07);
        }

        .left-card {
          width: 265px;
          left: 11%;
          top: 56%;
          transform: rotate(-9deg);
        }

        .left-card:hover {
          transform: rotate(-5deg) translateY(-7px);
        }

        .right-card {
          width: 285px;
          right: 7%;
          bottom: 14%;
          transform: rotate(8deg);
        }

        .right-card:hover {
          transform: rotate(4deg) translateY(-7px);
        }

        .icon-box {
          width: 52px;
          height: 52px;
          min-width: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050505;
          color: #fff;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, .08),
            0 7px 15px rgba(0, 0, 0, .13);
        }

        .icon-box svg {
          font-size: 17px;
        }

        .right-card .icon-box {
          background: #050505;
          color: #fff;
        }

        .info-card .text {
          display: flex;
          align-items: baseline;
          gap: 5px;
          min-width: 0;
          white-space: nowrap;
        }

        .info-card strong {
          display: inline-block;
          margin: 0;
          color: #111;
          font-size: 20px;
          font-weight: 850;
          line-height: 1;
        }

        .info-card span {
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 1199px) {
          .we-wrapper {
            min-height: 560px;
          }

          .we-text h2 {
            font-size: clamp(120px, 16vw, 180px);
          }

          .left-card {
            left: 4%;
          }

          .right-card {
            right: 3%;
          }
        }

        @media (max-width: 991px) {
          .we-wrapper {
            min-height: 520px;
          }

          .we-text h2 {
            font-size: clamp(110px, 19vw, 165px);
            letter-spacing: -8px;
          }

          .creative-badge {
            top: 48%;
            left: 50%;
            width: 155px;
            height: 155px;
          }

          .badge-center {
            width: 64px;
            height: 64px;
          }

          .badge-center svg {
            font-size: 24px;
          }

          .info-card {
            min-height: 62px;
          }

          .left-card {
            width: 220px;
            left: 2%;
            top: 58%;
          }

          .right-card {
            width: 235px;
            right: 1%;
            bottom: 12%;
          }

          .icon-box {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }

          .icon-box svg {
            font-size: 14px;
          }

          .info-card strong {
            font-size: 17px;
          }

          .info-card span {
            font-size: 12px;
          }
        }

        @media (max-width: 767px) {
          .we-are-section {
            padding: 0;
          }

          .grid-bg {
            background-size: 30px 30px;
            -webkit-mask-image:
              radial-gradient(
                ellipse 88% 70% at center,
                #000 0%,
                #000 52%,
                rgba(0, 0, 0, .65) 72%,
                transparent 100%
              );
            mask-image:
              radial-gradient(
                ellipse 88% 70% at center,
                #000 0%,
                #000 52%,
                rgba(0, 0, 0, .65) 72%,
                transparent 100%
              );
          }

          .grid-bg::before {
            background-size: 30px 30px;
            background-image:
              radial-gradient(circle, rgba(165, 132, 101, .22) 0 1.7px, transparent 2.2px);
          }

          .grid-bg::after {
            background:
              linear-gradient(
                90deg,
                var(--wa-bg) 0%,
                rgba(248, 246, 242, .72) 7%,
                transparent 25%,
                transparent 75%,
                rgba(248, 246, 242, .72) 93%,
                var(--wa-bg) 100%
              );
          }

          .we-wrapper {
            width: 100%;
            min-height: 460px;
            padding: 45px 10px 35px;
          }

          .we-text h2 {
            font-size: clamp(92px, 29vw, 145px);
            line-height: .76;
            letter-spacing: -7px;
          }

          .creative-badge {
            top: 48%;
            left: 59%;
            width: 128px;
            height: 128px;
          }

          .badge-text-ring text {
            font-size: 7px;
            letter-spacing: 1.4px;
          }

          .badge-center {
            width: 54px;
            height: 54px;
          }

          .badge-center svg {
            font-size: 20px;
          }

          .info-card {
            min-height: 54px;
            gap: 9px;
            padding: 7px 13px 7px 7px;
          }

          .left-card {
            width: auto;
            min-width: 175px;
            max-width: 205px;
            left: 2%;
            top: 58%;
            transform: rotate(-8deg);
          }

          .right-card {
            width: auto;
            min-width: 190px;
            max-width: 220px;
            right: -4%;
            bottom: 13%;
            transform: rotate(7deg);
          }

          .icon-box {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .icon-box svg {
            font-size: 13px;
          }

          .info-card strong {
            font-size: 15px;
          }

          .info-card span {
            font-size: 10.5px;
          }
        }

        @media (max-width: 480px) {
          .we-wrapper {
            min-height: 420px;
            padding: 40px 5px 30px;
          }

          .we-text h2 {
            font-size: clamp(82px, 30vw, 125px);
            line-height: .77;
            letter-spacing: -6px;
          }

          .creative-badge {
            top: 47.5%;
            left: 59%;
            width: 112px;
            height: 112px;
          }

          .badge-text-ring text {
            font-size: 6px;
            letter-spacing: 1px;
          }

          .badge-center {
            width: 48px;
            height: 48px;
          }

          .badge-center svg {
            font-size: 17px;
          }

          .left-card {
            min-width: 155px;
            left: -2%;
            top: 18%;
          }

          .right-card {
            min-width: 170px;
            right: -9%;
            bottom: 12%;
          }

          .info-card {
            min-height: 48px;
            padding: 6px 11px 6px 6px;
            gap: 7px;
          }

          .icon-box {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .info-card strong {
            font-size: 13px;
          }

          .info-card span {
            font-size: 9.5px;
          }
        }

        @media (max-width: 360px) {
          .we-wrapper {
            min-height: 390px;
          }

          .we-text h2 {
            font-size: 88px;
          }

          .creative-badge {
            left: 50%;
            width: 102px;
            height: 102px;
          }

          .badge-center {
            width: 42px;
            height: 42px;
          }

          .badge-center svg {
            font-size: 15px;
          }

          .left-card {
            min-width: 145px;
            left: 1%;
            top: 70;
          }

          .right-card {
            min-width: 160px;
            right: 2%;
          }

          .info-card span {
            font-size: 8.5px;
          }
        }

        @keyframes waFloatLeft {
          0%, 100% {
            transform: rotate(-9deg) translateY(0);
          }
          50% {
            transform: rotate(-9deg) translateY(-7px);
          }
        }

        @keyframes waFloatRight {
          0%, 100% {
            transform: rotate(8deg) translateY(0);
          }
          50% {
            transform: rotate(8deg) translateY(-8px);
          }
        }

        @keyframes badgeRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .left-card {
            animation: waFloatLeft 4.5s ease-in-out infinite;
          }

          .right-card {
            animation: waFloatRight 5s ease-in-out infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .left-card,
          .right-card,
          .badge-text-ring {
            animation: none;
          }
        }
      `}</style>

      <section className="we-are-section">
        <div className="grid-bg"></div>

        <div className="container">
          <div className="we-wrapper">
            <div className="we-text">
              <h2 className="line1">WE</h2>
              <h2 className="line2">ARE</h2>
            </div>

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
                <BsArrowUpRight />
              </div>
            </div>

            <div className="info-card left-card">
              <div className="icon-box">
                <FaUsers />
              </div>

              <div className="text">
                <strong>50+</strong>
                <span>Team Members</span>
              </div>
            </div>

            <div className="info-card right-card">
              <div className="icon-box">
                <FaHeart />
              </div>

              <div className="text">
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;