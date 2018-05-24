import React from "react";
import "../HomeText/HomeText.css";
import NavSearch from "../NavSearch";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const HomeText = (props) => (
  <div className="HomeTextDiv animated slideInUp">
    <h1>
      We help you connect with Industrial Storage Owners For all your Traditional & Non-Traditional Storage Needs
    </h1>
    <br />
    <h3>
      Warehouses, Lots, Land, Garages & More!
      <br />Your temporary or permanent storage facility is one search away!
    </h3>
    <br />
    <NavSearch getLocations={props.getLocation}/>
  </div>
);

export default HomeText;
