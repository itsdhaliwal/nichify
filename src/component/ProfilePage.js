import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ItemUploader from"./ItemUploader"

class ProfilePage extends Component {
  render() {   
    console.log(this.props)
    return (
        <div>
            <div>First Name</div>
            <div>Second name</div>
            <div>Email</div>
            <div>City {this.props.user.city}</div>
            <div>{this.props.user.f_name}</div>
            
        </div>
    );
  }
}

export default ProfilePage;
