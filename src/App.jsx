import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

// 1. WebDevelopment Page ko lazy load kiya (Sahi file path ke saath)
const WebDevelopment = lazy(() => import("./components/Services page/WebDevelopment"));
const WebDesign = lazy(() => import("./components/Services page/WebDesign"));


import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Global style injection for the Top Progress Bar
const globalStyles = `
  @keyframes topBarProgress {
    0% { transform: scaleX(0); }
    20% { transform: scaleX(0.25); }
    60% { transform: scaleX(0.55); }
    85% { transform: scaleX(0.75); }
    100% { transform: scaleX(0.88); } 
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

const loadingBarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "2.5px",
  background: "linear-gradient(90deg, #2563eb, #3b82f6, #10b981)",
  zIndex: 99999,
  boxShadow: "0 1px 8px rgba(59, 130, 246, 0.4)",
  animation: "topBarProgress 3s cubic-bezier(0.1, 0.85, 0.25, 1) forwards, pulseGlow 1.5s ease-in-out infinite",
  transformOrigin: "0% 50%",
  willChange: "transform",
};

// Full Screen Premium Component
const FullPremiumLoader = () => (
  <div className="premium-loader-wrap">
    <div className="premium-loader-backdrop" />
    <div className="premium-loader">
      <span />
      <span />
      <span />
    </div>
  </div>
);

// Unified Combined Fallback Loader
const CombinedLoader = () => (
  <>
    <style>{globalStyles}</style>
    <div style={loadingBarStyle} />
    <FullPremiumLoader />
  </>
);

// Page wrapper tool for triggering .route-fade-shell dynamically
const FadeRouteShell = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
    const timer = requestAnimationFrame(() => {
      setVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, [location]);

  return (
    <div className={`route-fade-shell ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Header />

      {/* Modern Suspense with premium dynamic dots feedback */}
      <Suspense fallback={<CombinedLoader />}>
        <Routes>
          <Route path="/" element={<FadeRouteShell><Home /></FadeRouteShell>} />
          <Route path="/AboutUs" element={<FadeRouteShell><AboutUs /></FadeRouteShell>} />
          <Route path="/contact" element={<FadeRouteShell><Contact /></FadeRouteShell>} />
          
          {/* 2. Web Development ka Route yahan add kar diya hai */}
          <Route path="/WebDevelopment" element={<FadeRouteShell><WebDevelopment /></FadeRouteShell>} />
          <Route path="/WebDesign" element={<FadeRouteShell><WebDesign /></FadeRouteShell>} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;