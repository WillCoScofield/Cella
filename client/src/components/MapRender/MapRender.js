import React from "react";
import GoogleMapReact from "google-map-react";
import "./MapRender.css";

const Map = ({ coords }) => (
  <div className="google-map">
    <GoogleMapReact
      defaultCenter={{
        lat: coords.lat,
        lng: coords.lng
      }}
      defaultZoom={15}
    />
  </div>
);

export default Map;