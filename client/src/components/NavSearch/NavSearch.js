import React from "react";
import "./NavSearch.css";

const NavSearch = props => (
    <form className="search">
        <input
            value={props.search}
            onChange={props.handleInputChange}
            name="searchAddress"
            type="text"
            className="form-control"
            placeholder="Seach"    
        />
        <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-success"
        >Submit
        </button>
    </form>
);

export default NavSearch;