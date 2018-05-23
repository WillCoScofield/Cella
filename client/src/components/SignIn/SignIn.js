import React from 'react';
import { Button, Label, Form, FormGroup, Modal, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../utils/API'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Name: "",
      Email: "",
      Password: ""

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit Clicked");
    if (this.state.Email && this.state.Password) {
      API.login({
        Email: this.state.Email,
        Password: this.state.Password
      })
        .then(res => this.loadPortfolio(res))
        .catch(err => alert(err))
    }
  }

  loadPortfolio = res => {
    console.log
    console.log(res);
    if (res.status === 200) {
      window.sessionStorage.setItem("user", JSON.stringify(res.data.token));
      this.props.close();
    }
    else { alert(res) }
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Sign In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>

            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onSubmit={this.handleFormSubmit} onClick={this.toggle}> Submit </Button>
          </ModalFooter>

        </Modal>
      </div>
    );
  }
}

export default SignIn;