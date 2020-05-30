import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// storage = this.props.firebase.storage().ref()

class ItemFetch extends Component {
  constructor() {
    super()
    this.state = {
      item: '',
    }

  }

  getImage = (image) => {
    console.log(this.props)
    this.props.firebase.storage.ref().child("/" + image + ".png").getDownloadURL().then((url) => {
      this.setState({ item: url })
    }, () => { console.log("notFound") })
  }
  componentDidMount() {
    this.getImage('sword4')
  }
  render() {
    return (
      <div className="d-inline-flex pt-5 justify-content-center " style={{height:"80vh",width:"65vh"}}>
        <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-5 mb-5 bg-dark rounded">
            <div class="card-body">
              <img src={this.state.item} alt="sword" className = "img-thumbnail" />
                <h4 class="card-title">Hand Crafted Thor's Hammmer</h4>
                <p class="card-text">This is a hand crafted model.It took three weeks to make this.</p>
                <p class="card-text">Rs. 499</p>
            </div>
        </div>
    </div> 
    );
  }
}

export default withFirebase(ItemFetch);