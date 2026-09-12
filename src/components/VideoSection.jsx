import React from "react";
import video from "../assets/dezoravideo.mp4";

const VideoSection = () => {
  return (
    <>
      <style>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Poppins,sans-serif;
      }

      .videoSection{
        width:100%;
        padding:40px 7%;
        background:#070707;
        overflow:hidden;
      }

      .videoContainer{
        max-width:1400px;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:70px;
        flex-wrap:wrap;
      }

      /* LEFT */

      .left{
        flex:1;
        min-width:320px;
      }

      .badge{
        display:inline-block;
        color:#facc15;
        border:1px solid #facc15;
        padding:8px 20px;
        border-radius:30px;
        margin-bottom:25px;
        font-size:14px;
        letter-spacing:2px;
      }

      .left h2{
        font-size:40px;
        color:#fff;
        line-height:1.2;
        margin-bottom:25px;
        font-weight:700;
      }

      .left h2 span{
        color:#facc15;
      }

      .left p{
        color:#c8c8c8;
        font-size:18px;
        line-height:1.9;
        margin-bottom:35px;
      }

      .list{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:18px;
        margin-bottom:40px;
      }

      .item{
        color:#fff;
        font-size:17px;
      }

      .item span{
        color:#facc15;
        margin-right:10px;
      }

      .btn{
        display:inline-block;
        padding:15px 35px;
        background:#facc15;
        color:#111;
        text-decoration:none;
        border-radius:50px;
        font-weight:600;
        transition:.4s;
      }

      .btn:hover{
        transform:translateY(-5px);
        box-shadow:0 20px 40px rgba(250,204,21,.35);
      }

      /* RIGHT */

      .right{
        flex:1;
        min-width:320px;
        position:relative;
      }

     .videoCard{
    width:100%;
    overflow:hidden;
    border-radius:20px;
    background:transparent;
    box-shadow:none;
    border:none;
}

.heroVideo{
    width:100%;
    height:550px;
    object-fit:cover;
    display:block;
    border-radius:20px;
    pointer-events:none;   /* Click nahi hoga */
    user-select:none;
}

      .videoCard:hover{
        transform:translateY(-10px) scale(1.02);
      }

      .videoCard video{
        width:100%;
        display:block;
      }

      .glow{
        position:absolute;
        width:280px;
        height:280px;
        background:#facc15;
        filter:blur(140px);
        opacity:.18;
        top:-70px;
        right:-50px;
        z-index:-1;
      }

      @media(max-width:991px){

        .videoContainer{
          flex-direction:column;
        }

        .left h2{
          font-size:42px;
        }

        .list{
          grid-template-columns:1fr;
        }

      }

      @media(max-width:576px){

        .videoSection{
          padding:70px 20px;
        }

        .left h2{
          font-size:32px;
        }

        .left p{
          font-size:15px;
        }

      }

      `}</style>

      <section className="videoSection">

        <div className="videoContainer">

          <div className="left">

  <div className="badge">
    DEZORA TECHNOLOGIES
  </div>

  <h2>
    Grow Your Business with <span>Professional Web Solutions</span>
  </h2>

  <p>
    Dezora Technologies provides website development, SEO, digital marketing,
    branding, and software solutions to help businesses increase their online
    presence and achieve sustainable growth.
  </p>

  <div className="list">
    <div className="item"><span>✔</span>Website Development</div>
    <div className="item"><span>✔</span>UI/UX & Responsive Design</div>
    <div className="item"><span>✔</span>SEO & Digital Marketing</div>
    <div className="item"><span>✔</span>Branding & Software Solutions</div>
  </div>

  <a href="#services" className="btn">
    Explore Services →
  </a>

</div>

          <div className="right">

            <div className="glow"></div>

            <div className="videoCard">

             <video
  src={video}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="heroVideo"
/>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default VideoSection;