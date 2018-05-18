import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "../components/Listing";
import Map from "../components/Map";
import SearchResultsContainer from "../components/SearchResultsContainer/SearchResultsContainer";
import MapRender from "../components/MapRender";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import "../components/BodyContainer/BodyContainer.css"


class Search extends Component {
    state = {
      listName: "Warehouse",
      listLocation: "Atlanta",
      listImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IyjG9GY-DYRCUxS9wYvIdjA6rzhjj8YJisFfyMmIfU0zmIKwMw"
    };
 
  render() {
    return (
      <BodyContainer id="search-page">

        <div className="row">
          <div className="col-sm-6">
            <SearchResultsContainer />
          </div>

          <div className="col-sm-6">
            <MapRender />


          </div>
        </div>
      </BodyContainer>
    );
  }

}

export default Search;



