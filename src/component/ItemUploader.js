import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

var ITEM = {
    item_desc : "",
    item_name: "",
    item_price: "",
    item_type: "",
    image: null,
    url: '',
    progress: 0
};

class ItemUploader extends Component {
    constructor() {
        super();
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
        var {item_name,item_desc,item_price,item_type}= this.state;
        var itemDesc,itemName,itemPrice,item_type;
        var itemData = {
            itemDesc: item_desc,
            itemName: item_name,
            itemPrice: item_price,
            itemType: item_type
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
        var {item_name,item_desc,item_price,item_type}= this.state;
        return (
            <div>
                <div className="d-flex pt-5 justify-content-center" style={{ backgroundColor: "powderblue", height: "95vh" }}>
                <div class="card col-6 text-white bg-dark mb-3">
          <div class="card-body">
                <h1>Item Uploader</h1>
                <form onSubmit={(e) => { e.preventDefault(); this.onSubmit();}} >
                <h4>Item Name</h4>
                <input type="text" placeholder="Enter Item Name" name="item_name"  value={item_name} onChange={this.onChange}></input>
                <h4>Item Description</h4>
                <input type="text" placeholder="Enter Item Desc" name="item_desc"  value={item_desc} onChange={this.onChange}></input>
                <h4>Item Price</h4>
                <input type="number" placeholder="Enter Item Price" name="item_price"  value={item_price} onChange={this.onChange}></input>
                <h4>Item Type</h4>
                <input type="text" placeholder="Enter Item Type" name="item_type"  value={item_type} onChange={this.onChange}></input>
                <br/>
                <div >
                    <br/>
                        <input type="file" onChange={this.handleChange}/>
                    <br/>
                    <img src={this.state.url || 'http://via.placeholder.com/200'} alt="Uploaded images" height="200" width="200"/>
                    <br/>
                    <progress value={this.state.progress} style={{ backgroundColor: "powderblue", width: "28vh" }} max="100"/>
                </div>
                <button class="btn btn-outline-primary" type="submit">Upload</button>
                </form>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withFirebase(ItemUploader);



