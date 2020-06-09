import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Firebase from "../Firebase";
import { Link } from "react-router-dom";
import SignOut from "../SignOut";

class NavAuth extends Component {
  /*  constructor(props) {
          super(props);
      }*/
  render() {
    return (
        <div class="btn-group dropleft">
        <Link to="/AddMoney" className="bg-dark btn btn-outline-primary">Rs.{this.props.Bal}</Link>
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.f_name}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/ProfilePage" className="btn" >Profile Page</Link>
        <Link to="/ItemUploader" className="btn" >Sell</Link><br/>
        <Link to="/Cart" className="btn" >Cart</Link><br/>
        <Link to="/Wishlist" className="btn" >Wishlist</Link><br/>
        <Link to="/ItemLogs" className="btn" >Item Uploaded</Link><br/>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><SignOut /></a>
        </div>
      </div>
    );
  }
}
export default NavAuth;

