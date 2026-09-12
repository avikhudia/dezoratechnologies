import React from "react";
import "./Loader.css";

const RouteLoader = () => {
  return (
    <div className="route-loader-wrap" aria-hidden="true">
      <div className="route-loader-track">
        <span className="route-loader-bar"></span>
      </div>
    </div>
  );
};

export default RouteLoader;