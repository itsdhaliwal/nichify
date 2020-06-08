import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { Link, withRouter} from "react-router-dom";
import ItemUploader from"./ItemUploader"

class ProfilePage extends Component {
  render() {   
    console.log(this.props)
    return (
        <div>
            <div>First Name {this.props.user.f_name}</div>
            <div>Second name</div>
            <div>Email {this.props.user.email} </div>
            <div>City {this.props.user.city}</div>
            <div>{this.props.user.f_name}</div>
            <Link to="/AddMoney" className="btn btn-outline-primary p-2" >Add Money</Link>
        </div>
    );
  }
}

export default ProfilePage;
