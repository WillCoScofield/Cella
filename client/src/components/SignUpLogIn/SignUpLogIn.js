import React from "react";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Label, Form, FormGroup, Modal, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classnames from 'classnames';
import "../SignUpLogIn/SignUpLogIn.css";

export default class SignUpLogIn extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.toggleTwo = this.toggleTwo.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    toggleTwo(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}>
                    Sign up or Login
                </DropdownToggle>
                <DropdownMenu id="drop-down-menu">
                    <DropdownItem disabled>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggleTwo('1'); }}>
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggleTwo('2'); }}>
                                    Login
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
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
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="Password" placeholder="" />
                                            </FormGroup>
                                            {/* <Button color="primary" onClick={this.toggle}>submit</Button> */}
                                        </Form>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            {/* <Button>Go somewhere</Button> */}
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            {/* <Button>Go somewhere</Button> */}
                                        </Card>

                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}