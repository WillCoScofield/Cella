import React from "react";

class NavSearch extends React.Component {

  state = {
    search: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <form id="search-search-form" className="search" action="/Search">
        <input
          id="search-search-input"
          value={this.state.search}
          onChange={this.handleInputChange}
          name="searchAddress"
          type="text"
          // className="form-control"
          placeholder="Atlanta, GA"
        />
        <button
          id="search-search-button"
          type="submit"
          onClick={this.handleFormSubmit}
          className="btn">
        <i className="material-icons">search</i>
        </button>
      </form>
    );
  }
}

export default NavSearch;
