import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

var ITEM = {
    item_desc : "",
    item_name: "",
    item_price: ""

};

class ItemUploader extends Component {
    constructor(props) {
        super(props);
        this.state = { ...ITEM };
    }
    onSubmit = (event) => {
        var {item_name,item_desc,item_price}= this.state;
        var itemDesc,itemName,itemPrice;
        var itemData = {
            itemDesc: item_desc,
            itemName: item_name,
            itemPrice: item_price
          };
        var key = this.props.firebase.db.ref().child("public/listings").push().key;
         var updates = {};
         updates["public/listings/" + key] = itemData;
        return this.props.firebase.db.ref().update(updates);
        console.log("hello");
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        var {item_name,item_desc,item_price}= this.state;
        return (
            <div>
                <h1>Item Uploader</h1>
                <form onSubmit={(e) => { e.preventDefault(); this.onSubmit();}} >
                <h4>Item Name</h4>
                <input type="text" placeholder="Enter Item Name" name="item_name"  value={item_name} onChange={this.onChange}></input>
                <h4>Item Description</h4>
                <input type="text" placeholder="Enter Item Desc" name="item_desc"  value={item_desc} onChange={this.onChange}></input>
                <h4>Item Price</h4>
                <input type="number" placeholder="Enter Item Price" name="item_price"  value={item_price} onChange={this.onChange}></input>
                <button class="btn btn-outline-primary" type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default withFirebase(ItemUploader);
