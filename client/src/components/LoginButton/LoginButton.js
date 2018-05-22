import React from 'react';
import { Button, Label, Form, FormGroup, Modal, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Sign Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
          <ModalBody>

          <Form>
          <FormGroup>
              <Label for="exampleEmail">Your Name</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
         

            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="" />
            </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>submit</Button>
            </ModalFooter>
            
        </Modal>
      </div>
    );
  }
}

export default SignUp;