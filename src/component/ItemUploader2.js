import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

var ITEM = {
    item_desc : "",
    item_name: "",
    item_price: "",
    image: null,
    url: '',
    progress: 0
};

class ItemUploader2 extends Component {
    constructor(props) {
        super(props);
        this.state = { ...ITEM };
        this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({image}));
        }
      }
      handleUpload = (event) => {
          const {image} = this.state;
          const uploadTask = this.props.firebase.storage.ref(`/${event+".png"}`).put(image);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
          }, 
          (error) => {
               // error function ....
            console.log(error);
          }, 
        () => {
            // complete function ....
            this.props.firebase.storage.ref().child(event+".png").getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
      }
    onSubmit = (event) => {
        var key = this.props.firebase.db.ref().child("public/listings").push().key;
        this.handleUpload(key);
        var {item_name,item_desc,item_price}= this.state;
        var itemDesc,itemName,itemPrice;
        var itemData = {
            itemDesc: item_desc,
            itemName: item_name,
            itemPrice: item_price
          };
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
                <br/>
                <div >
                    <br/>
                        <input type="file" onChange={this.handleChange}/>
                    <br/>
                    <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                    <br/>
                    <progress value={this.state.progress} max="100"/>
                </div>
                <button class="btn btn-outline-primary" type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default withFirebase(ItemUploader2);



