import React, { Component } from "react";
import SearchResultsContainer from "../components/SearchResultsContainer/SearchResultsContainer";
import MapRender from "../components/MapRender";
import { Row, Col } from "reactstrap";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import "../components/BodyContainer/BodyContainer.css"
import SearchFilter from "../components/SearchFilter/SearchFilter"
import API from "../utils/API.js";


class Search extends Component {

  state = {
    results: [],
  }

  componentDidMount() {
    // need to parse query string into a variable to pass to getLocations/getGeo
    // const searchQuery = parseQueryString( this.props.location.search );

    this.getLocations( "955+Juniper+St%2C+Atlanta%2C+GA+30309" );
  }


  getLocations = searchTerm => {
    API.getGeo(searchTerm)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data);
        }
        const results = {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng,
          boundNElat: res.data.results[0].geometry.viewport.northeast.lat,
          boundNElng: res.data.results[0].geometry.viewport.northeast.lng,
          boundSWlat: res.data.results[0].geometry.viewport.southwest.lat,
          boundSWlng: res.data.results[0].geometry.viewport.southwest.lng
        }
        this.setState({ results });
      })
      .catch(err => this.setState({ error: err.message }));
  }
 
  render() {
    return (
      <BodyContainer id="search-page">

      
        <Row>
          <Col sm="12" md="6" lg="6">
          <SearchFilter/>
          <SearchResultsContainer/>
          </Col>
          <Col sm="12" md="6" lg="6">
          <MapRender coords={this.state.results}/>
          </Col>
        </Row>


      </BodyContainer>
    );
  }

}

export default Search;



