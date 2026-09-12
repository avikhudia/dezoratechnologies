import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 1. Link ko import kiya
import "./Header.css";
import logo from "../assets/dezora logo.jpeg";

const menuData = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/WebDevelopment" },
      { label: "Web Design", href: "/WebDesign" },
      { label: "UI/UX Designing", href: "#ui-ux" },
      { label: "Digital Marketing", href: "#digital-marketing" },
      { label: "Graphic Desigen", href: "#cyber-security" },
      { label: "Video Editing", href: "#web-dev" },
      { label: "App Development", href: "#data-science" },
      { label: "SEO Services", href: "#data-science" },
      { label: "Software", href: "#data-science" },
    ],
  },
  {
    title: "Course",
    links: [
      { label: "Web Development", href: "#web-design" },
      { label: "Digital Marketing", href: "#seo" },
      { label: "Video Editing", href: "#branding" },
      { label: "Graphic Desigen", href: "#app-dev" },
      { label: "Basic Computer", href: "#consulting" },
      { label: "Typing Course", href: "#consulting" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { label: "Our Blogs", href: "#blogs" },
  //     { label: "Free Tutorials", href: "#tutorials" },
  //     { label: "Case Studies", href: "#case-studies" },
  //     { label: "API Documentation", href: "#documentation" },
  //     { label: "Discord Community", href: "#community" },
  //   ],
  // },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdown = (index) => {
    if (window.innerWidth < 992) {
      setOpenDropdown((prev) => (prev === index ? null : index));
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`dezora-header-shell ${isScrolled ? "dz-scrolled-state" : ""}`}>
      <div className="dezora-container">
        {/* Logo ko Link banaya */}
        <Link to="/" className="dezora-brand-identity">
          <img src={logo} alt="Dezora Technologies" className="dezora-logo" />
        </Link>

        <ul className={`dezora-menu-cluster ${isMenuOpen ? "dz-cluster-visible" : ""}`}>
          <li>
            {/* Home Link ko sahi kiya */}
            <Link to="/" className="dz-active-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          

          {menuData.map((item, index) => (
            <li className="dezora-cluster-node" key={item.title}>
              <button
                type="button"
                className="dezora-mobile-interceptor dezora-nav-button"
                onClick={() => handleDropdown(index)}
              >
                <span>{item.title}</span>
                <span
                  className={`dezora-angle-icon ${
                    openDropdown === index ? "dz-rotate-icon" : ""
                  }`}
                ></span>
              </button>

              <div
                className={`dezora-mega-vault ${
                  openDropdown === index ? "dz-vault-expanded" : ""
                }`}
              >
                {item.links.map((link) => (
                  <a key={link.label} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
          <li>
            <a href="/AboutUs" className="dz-active-link" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            {/* 2. Contact link ko exact '/contact' route par point kiya aur Link use kiya */}
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          

          <li className="dezora-mobile-cta-wrap">
            <a href="#book" className="dezora-cellular-trigger" onClick={closeMenu}>
              Book Session
            </a>
          </li>
        </ul>

        <a href="#book" className="dezora-action-trigger">
          Book Session
        </a>

        <button
          className={`dezora-sandwich-pack ${isMenuOpen ? "dz-pack-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
