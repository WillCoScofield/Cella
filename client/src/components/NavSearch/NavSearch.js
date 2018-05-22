import React from "react";
import "../NavSearch/NavSearch.css";


const NavSearch = ({ children, ...props }) => (
    <div {...props}>
        {children}
        <form id="home-search-form" className="search">
            <input
                id="home-search-input"
                value={props.search}
                onChange={props.handleInputChange}
                name="searchAddress"
                type="text"
                // className="form-control"
                placeholder="Atlanta, GA"
            />
                <button
                    id="home-search-button"
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn"
                >Search</button>
        </form>
    </div>
);

export default NavSearch;