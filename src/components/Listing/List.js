import React from "react";
import "./listing.css";


const List = props => (
    <div className="card">
      <div className="img-container">
        <img  src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
  


  export default List;