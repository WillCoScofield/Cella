import React from "react";
import { Nav, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import NavSearchSmall from "../NavSearchSmall/NavSearchSmall";
import "../SearchFilter/SearchFilter.css";



export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            isOpen: !this.state.isOpen
        });
    }




    render() {

        return (

            <Nav className="search-filter">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle id="search-filter-button" caret>
                        Select Filters
                    </DropdownToggle>
                    <DropdownMenu id="search-filter-menu">
                        <DropdownItem header>Location Type</DropdownItem>
                        <DropdownItem header>
                            <Input type="select" name="select" id="location-selector">
                                <option>Select One</option>
                                <option>Warehouse</option>
                                <option>Empty Land</option>
                                <option>Garage</option>
                                <option>Premium Facilities</option>
                            </Input>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Max Price Range <p id="output"></p></DropdownItem>
                        <DropdownItem header>
                            <Input type="select" name="select" id="max-price-selector">
                                <option>Select One</option>
                                <option>less than $100</option>
                                <option>less than $500</option>
                                <option>less than $1000</option>
                                <option>less than $2500</option>
                                <option>less than $5000</option>
                                <option>less than $10000</option>
                            </Input>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Sqaure Feet</DropdownItem>
                        <DropdownItem header>
                            <Input type="select" name="select" id="square-feet-selector">
                                <option>Select One</option>
                                <option>less than 500</option>
                                <option>500- 2500</option>
                                <option>2500-5000</option>
                                <option>5000 and more</option>
                            </Input>
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <NavSearchSmall getLocations={this.props.getLocation}/>
            </Nav>
        )
    }
}