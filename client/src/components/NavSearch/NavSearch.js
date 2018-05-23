import React from "react";
import "../NavSearch/NavSearch.css";

class NavSearch extends React.Component {

  state = {
    search: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <form id="home-search-form" className="search" action="/Search">
        <input
          id="home-search-input"
          value={this.state.search}
          onChange={this.handleInputChange}
          name="searchAddress"
          type="text"
          // className="form-control"
          placeholder="Atlanta, GA"
        />
        <button
          id="home-search-button"
          type="submit"
          onClick={this.handleFormSubmit}
          className="btn">
        Search</button>
      </form>
    );
  }
}

export default NavSearch;
