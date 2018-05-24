import React from "react";
import "./HomeImage.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const HomeImage = () => (
  <div className="HomeImageDiv animated fadeInRight">
     <img className="HomeImage" alt="" src='./images/sideElement.png' />
  </div>
);

export default HomeImage;
