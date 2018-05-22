import React, { Component } from "react";
import { Container } from 'reactstrap';
import ContactForm from "../components/ContactForm";

class Contact extends Component {
    state = {

    };



    render() {
        return (
            <div>
                <Container>
                    <ContactForm />
                </Container>
            </div>
        );
    }
}


export default Contact;