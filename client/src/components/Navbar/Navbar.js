import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "../Navbar/Navbar.css"
import { login } from "../Auth/Auth"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="nav" className="navbar navbar-light navbar-expand-lg animated fadeIn">
  

    <Link className="navbar-brand" to="/">
      <Logo />
    </Link>

    <div>
      <ul className="navbar-nav">

        <li className="nav-item">
          <Link to="/" className="nav-link"> Home </Link>
        </li>

        <li className="nav-item">
          <Link to="/About" className="nav-link"> About </Link>
        </li>

        <li className="nav-item">
          <Link to="/Contact" className="nav-link"> Contact </Link>
        </li>
        <li className="nav-item">
          <Link to="/Search" className="nav-link"> Search Locations </Link>
        </li>
       
        <li className="nav-item">
          <button id="login-button" onClick={login}>SignUp/Login</button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
