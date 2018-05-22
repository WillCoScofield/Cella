import React from "react";
import "./listing.css";


const List = props => (
    <div className="card">
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
            </li>
            <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
  


  export default List;