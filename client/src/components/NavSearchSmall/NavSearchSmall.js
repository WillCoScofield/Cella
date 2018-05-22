import React from "react";
import "../NavSearchSmall/NavSearchSmall.css";

const NavSearch = ({ children, ...props }) => (
    <div {...props}>
        {children}
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
            <i class="material-icons">search</i>
            </button>
        </form>
    </div>
);

export default NavSearch;