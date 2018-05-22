
import Navbar from "../components/Navbar";
import Wrapper from "../components/Navbar";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import { Container, Row, Col  } from 'reactstrap';
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