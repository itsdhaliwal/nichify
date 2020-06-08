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
      <div className = "bg-gray">
       <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          items
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to={"/TypeFetcher/Bangles"} className="btn" >Bangles</Link><br/>
        <Link to="/TypeFetcher/Art" className="btn" >Art</Link><br/>
        <Link to="/TypeFetcher/KeyChain" className="btn" >Key Chain</Link><br/>
      </div>
      </div>

    );
  }
}
export default withFirebase(Navbar2);
