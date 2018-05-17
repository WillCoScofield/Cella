
import React from "react";
import "./map.css";

const Map = props => (
    <div>
        <div className="mapImage">
            <img src={props.image} />
        </div>
    </div>
);

export default Map;