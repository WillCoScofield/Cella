import React from 'react';
import { Button, Label, Form, FormGroup, Input } from 'reactstrap';
import "./ContactForm.css";

const ContactForm = props => (
<div className=" container formMargin animated slideInUp">
    <div className="formContainer">
        <h2>Contact Us!</h2>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Your Name</Label>
                <Input type="name" name="name" id="Name" placeholder="" />
            </FormGroup>

            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="" />
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Your Message</Label>
                <Input type="textarea" name="text" id="UserMessage" />
            </FormGroup>

            <Button color="primary">submit</Button>

        </Form>

    </div>
</div>

);


export default ContactForm;