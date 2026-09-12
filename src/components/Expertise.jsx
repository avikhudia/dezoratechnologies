import React from "react";
import "./Expertise.css";
import img1 from "../assets/web design1.webp";
import img2 from "../assets/digital marketing1.webp";
const caseStudies = [
  {
    id: 1,
    brand: "Dezora Technologies",
    logoType: "dezora",
    title:
      "Custom Website Development for Business Growth.",
    image: img1,
    tags: ["Web Development", "React", "UI/UX"],
    stats: [
      { value: "95%", label: "Client Satisfaction" },
      { value: "3x", label: "More Leads" },
    ],
    theme: "warm",
  },
  {
    id: 2,
    brand: "Dezora Technologies",
    logoType: "dezora",
    title:
      "SEO & Digital Marketing That Delivers Results.",
    image: img2,
    tags: ["SEO", "Google Ads", "Marketing"],
    stats: [
      { value: "250%", label: "Traffic Growth" },
      { value: "4x", label: "Online Visibility" },
    ],
    theme: "cool",
  },
];

function BrandLogo() {
  return (
    <div className="brand brand--inline">
      <span className="brand__main brand__main--normal">DEZORA</span>
      <span className="brand__sub">TECHNOLOGIES</span>
    </div>
  );
}

function CaseCard({ item }) {
  return (
    <article className={`case-card case-card--${item.theme}`}>
      <img src={item.image} alt={item.title} className="case-card__image" />

      <div className="case-card__overlay case-card__overlay--theme"></div>
      <div className="case-card__overlay case-card__overlay--shade"></div>

      <div className="case-card__content">
        <div className="case-card__top">
          <BrandLogo type={item.logoType} />
        </div>

        <div className="case-card__bottom">
          <div className="case-card__tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="case-card__tag">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="case-card__title">{item.title}</h3>

          <div className="case-card__stats">
            {item.stats.map((stat, index) => (
              <div className="case-stat" key={index}>
                <h4 className="case-stat__value">{stat.value}</h4>
                <p className="case-stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
       <div className="case-studies__header">
  <div className="case-studies__intro">
    <span className="case-studies__label">Our Portfolio</span>

    <h2 className="case-studies__heading">
      Websites That Drive
      <br />
      Business Growth
    </h2>
  </div>

  <div className="case-studies__text-wrap">
    <p className="case-studies__text">
      Explore our website development, SEO, branding, and digital marketing
      projects built to help businesses grow online.
    </p>
  </div>
</div>

        <div className="case-studies__grid">
          {caseStudies.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
