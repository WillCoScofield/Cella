import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "../components/Listing";
import Map from "../components/Map"

class Search extends Component {
    state = {
      listName: "Warehouse",
      listLocation: "Atlanta",
      listImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IyjG9GY-DYRCUxS9wYvIdjA6rzhjj8YJisFfyMmIfU0zmIKwMw",
      map: "http://joomly.net/frontend/web/images/googlemap/map.png"
      
    };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    // componentDidMount() {
    //   API.getBaseBreedsList()
    //     .then(res => this.setState({ breeds: res.data.message }))
    //     .catch(err => console.log(err));
    // }
  
    // handleInputChange = event => {
    //   this.setState({ search: event.target.value });
    // };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   API.getDogsOfBreed(this.state.search)
    //     .then(res => {
    //       if (res.data.status === "error") {
    //         throw new Error(res.data.message);
    //       }
    //       this.setState({ results: res.data.message, error: "" });
    //     })
    //     .catch(err => this.setState({ error: err.message }));
    // };


    render() {
      return (
     
        <div>
           
           
                <div class="row">
                    <div class="col-sm-6">
                    
                    <List
                    name = {this.state.listName}
                    image = {this.state.listImage}
                    location = {this.state.listLocation}
                    />
                    <List
                    name = {this.state.listName}
                    image = {this.state.listImage}
                    location = {this.state.listLocation}
                    />
                  

                    </div>
                    <Map
                    image = {this.state.map}
                    />
                    <div class="col-sm-6">

                    <Map/>
                    </div>
                </div>

        

        </div>
  
      );
    }
  }
  
  export default Search;
  


