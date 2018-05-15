import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Navbar";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Wrapper>
            </Wrapper>

        </div>
    </Router>
);

export default App;

