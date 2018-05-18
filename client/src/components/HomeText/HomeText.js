import React from "react";
import { Link } from "react-router-dom";
import "./HomeText.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const HomeText = () => (
  <div className="HomeTextDiv">
    <p>We’ll help you find storage space for any and EVERYTHING you could ever imagine.  Your temporary or permanent storage solution is one easy search away!</p>
    <p>Use SpaceHolder to gain access to traditional and non-traditional storage solutions.</p>
  </div>
);

export default HomeText;
