import React,{ Component } from "react";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.svg"
import Navigation from "./Navigation"
class Navbar extends Component {
  
    render() {
      return (
        <div className="m-0">
          <nav className="navbar m-0 navbar-expand-lg navbar-Dark bg-dark">
            <div className="col-2">
              <Link class="navbar-brand" to="/Home"><b>Nichify</b></Link>
              <img src={logo} style={{height:"30px"}}></img>
            </div>
            <div class="col-8 d-flex justify-content-center">
              <form class="form-inline col-12">
                <input class="form-control mr-sm-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success  my-2 my-sm-0 " type="submit">Search</button>
              </form>
              </div>
              <div className="col-2 justify-content-center justify-content-sm-end">
                <Navigation user={this.props.user} username={this.props.username}></Navigation>
              </div>
              </nav>
           </div>
         
      );
    }
}
export default Navbar;
