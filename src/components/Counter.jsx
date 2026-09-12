import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";
const stats = [
  {
    number: 250,
    suffix: "+",
    title: "Projects Delivered",
    text: "Websites, software, and digital solutions.",
    icon: "💼",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
    text: "Trusted for quality and business growth.",
    icon: "⭐",
  },
  {
    number: 35,
    suffix: "+",
    title: "Digital Services",
    text: "Web development, SEO, and marketing.",
    icon: "🚀",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Expert Support",
    text: "Reliable technical and customer support.",
    icon: "🤝",
  },
];

function CounterCard({ number, suffix, title, text, icon, delay }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const duration = 1700;
    const increment = Math.ceil(number / (duration / 16));

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <div
      className="counter-card"
      ref={cardRef}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="counter-line"></span>
      <div className="counter-shine"></div>

      <div className="counter-icon-wrap">
        <div className="counter-icon-glow"></div>
        <span className="counter-icon">{icon}</span>
      </div>

      <h3 className="counter-number">
        {count}
        {suffix}
      </h3>

      <h4 className="counter-title">{title}</h4>
      <p className="counter-text">{text}</p>
    </div>
  );
}

function Counter() {
  return (
    <section className="counter-section">
      <div className="counter-bg counter-bg-1"></div>
      <div className="counter-bg counter-bg-2"></div>

      <div className="counter-container">
       <div className="counter-heading">
 <h2>
  Our <span>Achievements</span>
</h2>

<p>
  Trusted by businesses worldwide.
</p>
</div>

        <div className="counter-grid">
          {stats.map((item, index) => (
            <CounterCard key={index} {...item} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;