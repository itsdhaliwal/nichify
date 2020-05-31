import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class ImageFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }

  }
  getImage = (image) => {
    console.log(this.props)
    this.props.firebase.storage.ref().child("/" + image + ".png").getDownloadURL().then((url) => {
      this.setState({ item: url })
    }, () => { console.log("notFound") })
  }
  componentDidMount() {
    this.getImage(this.props.itemName)
  }
  render() {
    return (
        <div>        
            <img src={this.state.item} alt="sword" className = "img-thumbnail" />
        </div>
    );
  }
}

export default withFirebase(ImageFetch);