import React from "react";
import "./Logo.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Logo = () => (
  <div className="logoDiv">
    <img className="cellaLogo" alt="" src='./images/cellaLogo.png' />
    
  </div>
);

export default Logo;
