import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import List from "../components/Listing";
import Map from "../components/Map"

class Search extends Component {
    state = {
      listName: "Warehouse",
      listLocation: "Atlanta",
      listImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IyjG9GY-DYRCUxS9wYvIdjA6rzhjj8YJisFfyMmIfU0zmIKwMw",
      map: "https://www.jqueryscript.net/images/Show-Nearby-Places-jQuery-Google-Maps-WhatsNearby.jpg"
      
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
           
            <Wrapper>
                <Navbar/>
                <div class="row">
                    <div class="col-sm-6">
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

            </Wrapper>

        </div>
  
      );
    }
  }
  
  export default Search;
  


