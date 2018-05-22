import React from "react";
import "./listing.css";


const Listing = props => (
  <div className="card">
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Type:</strong> {props.type}
        </li>
        <li>
          <strong>Address:</strong> {props.address}
        </li>
        <li>
          <strong>Sq. Ft:</strong> {props.SquareFeet}
        </li>
        <li>
          <strong>$:</strong> {props.Price}
        </li>
      </ul>
    </div>
  </div>
);



export default Listing;