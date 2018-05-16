import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Search from "./pages/Search.js"

class App extends Component {
  render() {
    return (

      <Router>
        <div>
       
          <Route exact path="/" component={Search} />
        </div>

      </Router>



    );
  }
}

export default App;
