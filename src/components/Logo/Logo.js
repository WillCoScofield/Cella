import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Logo = () => (
  <div className="logoDiv">
    <img className="cellaLogo" src='./images/cellaLogo.png' />
    
  </div>
);

export default Logo;
