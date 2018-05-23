import React from "react";
import "../NavSearchSmall/NavSearchSmall.css";

const NavSearchSmall = props => (
    <div>
        <form id="search-search-form" className="search">
            <input
                id="search-search-input"
                value={props.search}
                onChange={props.handleInputChange}
                name="searchAddress"
                type="text"
                // className="form-control"
                placeholder="Atlanta, GA"
            />
            <button
                id="search-search-button"
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn">
            <i className="material-icons">search</i>
            </button>
        </form>
    </div>
);

export default NavSearchSmall;