import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search.js"

const App = () => (

      <Router>
        
        <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
        </Wrapper>

        {/* <Footer /> */}
        </div>
      </Router>

  );

export default App;
