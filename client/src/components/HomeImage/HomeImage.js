import React from "react";
import { Link } from "react-router-dom";
import "./HomeImage.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const HomeImage = () => (
  <div className="HomeImageDiv">
     <img className="HomeImage" src='./images/sideElement.png' />
  </div>
);

export default HomeImage;
