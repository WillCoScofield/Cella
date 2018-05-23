import React from "react";
import GoogleMapReact from "google-map-react";
import "./MapRender.css";
import MyGreatPlace from '../MyGreatPlace/my_great_place.js';
import shouldPureComponentUpdate from 'react-pure-render/function';

const TestComp = ( props ) => <h1>{props.children}</h1>;

class Map extends React.Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { coords } = this.props;

    return ( <div className="google-map">
        <GoogleMapReact
          defaultCenter={{
            lat: coords.lat,
            lng: coords.lng
          }}
          defaultZoom={15}
        >
        <MyGreatPlace lat={coords.lat} lng={coords.lng} text={'A'} /* Kreyser Avrora */ />
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;