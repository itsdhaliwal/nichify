import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getDefaultNormalizer, waitForDomChange } from "@testing-library/react";
// storage = this.props.firebase.storage().ref()


class ItemFetch2 extends Component {
  state={items:null}
  getImage = (image) => {
    console.log(this.props)
    this.props.firebase.storage.ref().child("/" + image + ".png").getDownloadURL().then((url) => {
      this.setState({ item: url })
    }, () => { console.log("notFound") })
  }
  getData = () => { 
    var itemName;
    console.log("Fecth Data");
    const itemRef = this.props.firebase.db.ref("public/listings");
    itemRef.on('value',(snapshot) => {
        var items = snapshot.val();
        console.log(items);
        console.log("done");
        this.setState({items:items})
      
    });
  }

  componentDidMount() {
    this.getImage('sword4')
    this.getData();
  }

  render() {
    if(this.state.items)
    return (
      <div>
         {Object.keys(this.state.items).map((itemKey)=>(
         <div className="d-inline-flex pt-5 justify-content-center " style={{height:"80vh",width:"65vh"}}>
        <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-5 mb-5 bg-dark rounded">
            <div class="card-body">
              <img src={this.state.item} alt="sword" className = "img-thumbnail" />
                <h4 class="card-title">{this.state.items[itemKey].itemName}</h4>
                <p class="card-text">{this.state.items[itemKey].itemDesc}</p>
                <p class="card-text">{this.state.items[itemKey].itemPrice}</p>
            </div>
        </div>
    </div> ))
      
  }
    </div>
    );
    else
    return(
      <div>
        Loading...
      </div>
    )
  }
}

export default withFirebase(ItemFetch2);