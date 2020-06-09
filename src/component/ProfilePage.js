import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { Link, withRouter} from "react-router-dom";
import ItemUploader from"./ItemUploader"
import Cart from "./Cart.js"
import Wishlist from "./Wishlist.js"
import ItemLogs from "./ItemLogs";

class ProfilePage extends Component {
  render() {   
    console.log(this.props)
    return (
      <div className="row m-0">
        <div className="col-3 py-2 border-right">
          <div className="col-12 display-4">Profile</div>
          <div className="col-12 py-1 d-flex">
            <div className="flex-shrink-1 h5">Name:</div>
            <div className="flex-grow-1"></div>
            <div className="flex-shrink-1"> {this.props.user.f_name}</div>
          </div>
          <div className="col-12 py-1 d-flex border-top">
            <div className="flex-shrink-1 h5 ">Email:{" "}</div>
            <div className="flex-grow-1"></div>
            <div className="flex-shrink-1"> {this.props.user.email}</div>
          </div>
          <div className="col-12 py-1 d-flex border-top">
            <div className="flex-shrink-1 h5">Address</div>
            <div className="flex-grow-1"></div>
            <div>
              <div className="flex-shrink-1">
                <div className="col-12 p-0 text-right"> 
                <div className="d-inline-flex">{this.props.user.city}</div>
              </div>
              <div className="col-12 p-0 text-right"> {this.props.user.state}</div>
            </div>
          </div>
        </div>
        <div className="col-12 py-1 d-flex border-top">
            <div className="flex-shrink-1 h5 ">Balance:{" "}</div>
            <div className="flex-grow-1"></div>
            <div className="flex-shrink-1"> {this.props.user.Balance}</div>
          </div>
        <div className="col-12 pt-2 d-flex justify-content-center">
          <Link to="/AddMoney" className="btn btn-dark col-6 p-2" >Add Money</Link>
        </div>
      </div>
      <div className="col-8 py-2">
      <ItemLogs user={this.props.authUser}/>
      <Cart user={this.props.authUser}/>
      <Wishlist user={this.props.authUser}/>
      </div>
    </div>
    );
  }
}

export default ProfilePage;
