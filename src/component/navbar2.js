import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png"
import Navigation from "./Navigation"
import { withFirebase } from "./Firebase";

class Navbar2 extends Component {


  render() {

    return (
      <div>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/TypeFetcher" className="btn" ></Link>
          <Link to="/TypeFetcher" className="btn" >Sell</Link><br />
          <Link to="/TypeFetcher" className="btn" >Cart</Link><br />
          <Link to="/TypeFetcher" className="btn" >Wishlist</Link><br />
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><SignOut /></a>
        </div>
      </div>

    );
  }
}
export default withFirebase(Navbar2);
