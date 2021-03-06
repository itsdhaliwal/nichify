import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

class AddToWishlistButton extends Component {
state={itemkey1:null}
adddata =  () => {
    //this.setState({itemkey1:this.props.itemName });
    /*var key = this.props.firebase.db.ref().child("users/" + this.props.userID +"/cart/items/").push().key;
    var itemkey;
    var items= {
        itemkey: this.props.itemName
      };*/
    var updates = {};
    updates["users/" + this.props.userID +"/wishlist/items/" + this.props.itemName] = {confirmed:false,shipped:false,delivered:false,cancelled:false};
    return this.props.firebase.db.ref().update(updates);
}
render() {
    return (
        <div>   
            <button class="btn btn-outline-primary" onClick = {this.adddata}>Add to Wishlist</button>
        </div>
        )
    }
}
export default withFirebase(AddToWishlistButton);