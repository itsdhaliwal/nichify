import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getDefaultNormalizer, waitForDomChange } from "@testing-library/react";
// storage = this.props.firebase.storage().ref()
import ImageFetch from "./ImageFetch"
import ItemPage from "./ItemPage";
import AddToCart from "./AddToCartButton"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";

class TypeFetcher extends Component {
  state = { items: null , type:null}
  /* getImage = (image) => {
     console.log(this.props)
     this.props.firebase.storage.ref().child("/" + image + ".png").getDownloadURL().then((url) => {
       this.setState({ item: url })
     }, () => { console.log("notFound") })
   }*/
  getData = () => {
    var itemName;
    console.log("Fecth Data");
    const itemRef = this.props.firebase.db.ref("public/listings");
    itemRef.on('value', (snapshot) => {
      var items = snapshot.val();
      console.log(items);
      console.log("done");
      this.setState({ items: items })
    });
  }

  componentDidMount() {
    //this.getImage('sword4')
    this.setState({type : this.props.match.params.id});
    this.getData();

  }
  componentDidUpdate() {
    if(this.state.type!=this.props.match.params.id){
    this.setState({ type: this.props.match.params.id });
  }
}
  render() {
    if (this.state.items)
      return (
        <div>
          {Object.keys(this.state.items).map((itemKey) => {
            console.log("This is item Key");
            if(this.state.items[itemKey].itemType == this.state.type){
            return (
              <div className="d-inline-flex pt-5 justify-content-center " style={{ height: "90vh", width: "65vh" }}>
                <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-8 mb-12 bg-dark rounded">
                  <div class="card-body">
                    <ImageFetch itemName={itemKey} />
                    <h4 class="card-title">{this.state.items[itemKey].itemName}</h4>
                    <p class="card-text">{this.state.items[itemKey].itemDesc}</p>
                    <p class="card-text">Rs.{this.state.items[itemKey].itemPrice}</p>
                    <AddToCartButton itemName={itemKey} userID={(this.props.userID != null) ? this.props.userID : ''} />
                    <br />
                    <AddToWishlistButton itemName={itemKey} userID={(this.props.userID != null) ? this.props.userID : ''} />
                    <br />
                    <Link className="btn btn-outline-primary" to={"/ItemPage/" + itemKey}>
                      View Item
                </Link>
                  </div>
                </div>
              </div>)}
          })
          }
        </div>
      );
    else
      return (
        <div>
          Loading...
        </div>
      )
  }
}

export default withRouter(withFirebase(TypeFetcher));
