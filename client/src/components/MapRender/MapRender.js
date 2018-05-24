import React from "react";
import GoogleMapReact from "google-map-react";
import "./MapRender.css";
import MyGreatPlace from '../MyGreatPlace/my_great_place.js';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Map extends React.Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { coords } = this.props;

    return ( <div className="google-map">
        <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAo3U3-CYQSA_L--3jjHzIIqBnngBiAMEU"}}
          defaultCenter={{
            lat: coords.lat,
            lng: coords.lng
          }}
          defaultZoom={14}
        >
        <MyGreatPlace lat={coords.lat} lng={coords.lng} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.775243} lng={-84.418786} text={'1'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7873031} lng={-84.3923948} text={'2'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7981744} lng={-84.370805} text={'3'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7563339} lng={-84.384841} text={'4'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7806387} lng={-84.3822761} text={'5'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7234699} lng={-84.4129791} text={'6'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7469027} lng={-84.3655018} text={'7'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={33.7471951} lng={-84.3920049} text={'8'} /* Kreyser Avrora */ />
  
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;