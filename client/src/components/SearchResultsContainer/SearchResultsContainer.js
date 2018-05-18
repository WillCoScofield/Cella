import React from "react";
import List from "../Listing";
import "../SearchResultsContainer/SearchResultsContainer.css"

const SearchResultsContainer = props => (
    <div>
        <div className="SearchResultsContainer" id={props.id}>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    </div>
);

export default SearchResultsContainer;