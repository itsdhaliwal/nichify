import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

class ProfilePage extends Component {

  render() {
    return (
        <div>
            <div>First Name</div>
            <div>Second name</div>
            <div>Email</div>
            <div>City</div>
            <div>{this.props.f_name}</div>
        </div>
    );
  }
}

export default ProfilePage;
