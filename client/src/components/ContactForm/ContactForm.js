import React from 'react';
import { Button, Label, Form, FormGroup, Input } from 'reactstrap';
import "./ContactForm.css";

const ContactForm = props => (
<div className=" container formMargin animated slideInUp">
    <div className="formContainer">
        <h2 id="contact-header">Contact Us for General Inquiries</h2>
        <Form>
            <FormGroup>
                <Label id="label" for="exampleEmail">Your Name</Label>
                <Input type="name" name="name" id="Name" placeholder="James Deen" />
            </FormGroup>

            <FormGroup>
                <Label id="label" for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="email@gmail.com" />
            </FormGroup>

            <FormGroup>
                <Label id="label" for="exampleText">Your Message</Label>
                <Input type="textarea" name="text" id="UserMessage" placeholder="let us know what you're thinking about"/>
            </FormGroup>

            <Button id="contact-form-button">submit</Button>

        </Form>

    </div>
</div>

);


export default ContactForm;