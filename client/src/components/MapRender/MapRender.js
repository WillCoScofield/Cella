import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./MapRender.css";
import API from "../../utils/API.js"

const AnyReactComponent = ({ text }) => <div>{ text }</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: API.lat, lng: API.lng },
    zoom: 11
  }
  
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
