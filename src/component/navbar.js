import React,{ Component } from "react";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class Navbar extends Component {
  
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-Dark bg-dark">
            <div className="col-2">
              <a class="navbar-brand" href="#"><b>Nichify</b></a>
            </div>
            <div class="col-8 d-flex justify-content-center">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" size="100" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
              <div className="col-2 justify-content-center justify-content-sm-end">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <a> </a> 
                <Link to="/SignUp"className="btn btn-primary">Sign Up</Link>
              </div>
              </nav>
           </div>
         
      );
    }
}
export default Navbar;
