import React from "react";
import "./style.scss";
import logo from "../image/logo.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-icon">
        <img src={logo} alt="Logo" className="loader-logo" />
      </div>
      <div className="loader-progress">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
