import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search.js"
import Home from "./pages/Home.js"

const App = () => (

  <Router>

    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
      </Wrapper>

      {/* <Footer /> */}
    </div>
  </Router>

);

export default App;
