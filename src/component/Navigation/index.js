import React, { Component } from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import NavAuth from "./NavAuth";
import { Link } from "react-router-dom";

/*const Navigation = ({ user, username }) => (
    <div className="row justify-content-center justify-content-sm-end">
        {user ? <NavAuth authUser={user} username={username} /> :
            <NonAuth />}
    </div>
)*/
class Navigation extends Component {
  render() {
    return (
      <div className="row justify-content-center justify-content-sm-end">
        {this.props.user ? (
          <NavAuth authUser={this.props.user} username={this.props.username} />
        ) : (
          <div>
            <Link to="/Login" className="btn btn-outline-primary m-1" >Login</Link>
            <Link className="btn btn-outline-primary m-1" to="/SignUp">Sign Up</Link>
            <Link to="/ProfilePage" className="btn btn-outline-primary m-1" >Profile Page</Link>
          </div>
        )}
      </div>
    );
  }
}
export default Navigation;