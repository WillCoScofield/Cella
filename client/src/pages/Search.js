import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Listing from "../components/Listing";
import Map from "../components/Map";
// import SearchResultsContainer from "../components/SearchResultsContainer/SearchResultsContainer";
import MapRender from "../components/MapRender";
import { Container, Row, Col } from "reactstrap";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import "../components/BodyContainer/BodyContainer.css"
import SearchFilter from "../components/SearchFilter/SearchFilter"
import API from "../utils/API"


class Search extends Component {
  state = {
    listName: "Warehouse",
    listLocation: "Atlanta",
    listImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IyjG9GY-DYRCUxS9wYvIdjA6rzhjj8YJisFfyMmIfU0zmIKwMw",
    listings: []
  };

  componentDidMount() {
    this.loadListings();
  };

  loadListings = () => {
    API.getListings()
      .then(res => this.setState({ listings: res.data }))
      .catch(err => console.log(err));
  };



  render() {
    console.log(this.state.listings);
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
            <MapRender />
          </Col>
        </Row>


      </BodyContainer>
    );
  }

}

export default Search;



