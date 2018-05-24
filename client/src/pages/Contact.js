import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import "../components/ContactForm/ContactForm.css";
import BodyContainer from "../components/BodyContainer/BodyContainer";

class Contact extends Component {
    state = {

    };



    render() {
        return (
            
            
                <BodyContainer id="contact-page">
                <br/><br/><br/><br/><br/>
                    <ContactForm id="contactBox"/>
                </BodyContainer>
            
        );
    }
}


export default Contact;