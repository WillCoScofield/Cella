import React, { Component } from "react";
import Listing from "../components/Listing";
// import SearchResultsContainer from "../components/SearchResultsContainer/SearchResultsContainer";
import MapRender from "../components/MapRender";
import { Row, Col } from "reactstrap";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import "../components/BodyContainer/BodyContainer.css"
import SearchFilter from "../components/SearchFilter/SearchFilter"
import API from "../utils/API";

class Search extends Component {
  state = {
    results: [],
    listings: []
  };

  componentDidMount() {
    console.log( this.props );
    this.loadListings();
    const searchQuery = new URLSearchParams(this.props.location.search);
    const searchAddress = searchQuery.get("searchAddress");
    this.getLocations(searchAddress);
  };

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
        console.log(results);
        this.setState({ results });
      })
      .catch(err => this.setState({ error: err.message }));
  }
  

  loadListings = () => {
    API.getListings()
      .then(res => this.setState({ listings: res.data }))
      .catch(err => console.log(err));
  };



  render() {
    return (
      <BodyContainer id="search-page">

      
        <Row>
          <Col sm="12" md="6" lg="6">
            <SearchFilter />
            <div className="listingContainer">
              {this.state.listings.map(listing => {
                return (
                  <Listing
                    key={listing._id}
                    image={listing.image}
                    type={listing.type}
                    address={listing.Address}
                    SquareFeet={listing.SquareFeet}
                    Price={listing.Price}
                  />
                )
              })}

            </div>



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



