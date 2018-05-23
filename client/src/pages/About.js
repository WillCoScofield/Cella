import BodyContainer from "../components/BodyContainer/BodyContainer";
import AboutContainer from '../components/AboutContainer/AboutContainer.js';
import React, { Component } from "react";





class About extends Component {

    render(){
        return(
    
    <BodyContainer id="about-page">
    <div>

        <AboutContainer />

    </div>

    </BodyContainer>
    )
}
}

export default About;