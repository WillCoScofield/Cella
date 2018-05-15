import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Cella
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/link1"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            link1
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/link2"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/link2" className="nav-link">
            link2
          </Link>
        </li>
      </ul>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term" />
        <div class="input-group-btn">
          <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
