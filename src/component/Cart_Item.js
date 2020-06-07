import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ImageFetch from "./ImageFetch";

class Cart_Item extends Component {

    state = {
        item: null
    }
    getData = () => {
        var itemName;
        console.log("Fecth Data");
        this.props.firebase.db.ref("public/listings/" + this.props.itemkey).on('value', (snapshot) => {
            var item = snapshot.val();
            console.log(item);
            console.log("done");
            this.setState({ item: item })
        });
    }
    RemoveFunc = () =>{
        //let userRef = this.props.firebase.db.ref("users/" + this.props.user.uid +"/cart/items/" + "-M8ivqcmWHVvvJ7r-eDA");
        //userRef.remove()
    }
    componentDidMount() {
        this.setState({ id: this.props.itemkey })
        this.getData();
    }
    render() {
        if (this.state.item)
            return (
                /*  <div className="d-inline-flex pt-5 justify-content-center " style={{ height: "60vh", width: "200vh" }}>
                      <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-6 mb-12 bg-dark rounded">
                          <div class="card-body">
                              <ImageFetch itemName={this.props.itemkey} />
                              <h4 class="card-title">{this.state.item.itemName}</h4>
                              <p>{this.state.item.itemDesc}</p>
                              <p>Rs.{this.state.item.itemPrice}</p>
                              <button className="btn btn-outline-primary">Buy</button>
                          </div>
                      </div>
                  </div>*/
                  <div>
                    <div class="card col-12 bg-dark text-white">
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <ImageFetch itemName={this.props.itemkey} />
                                    </div>
                                    <div class="col-sm">
                                        <h4 class="card-title">{this.state.item.itemName}</h4>
                                        <p>{this.state.item.itemDesc}</p>
                                        <p>Rs.{this.state.item.itemPrice}</p>
                                    </div>
                                    <div class="col-sm">
                                        <button className="btn btn-outline-primary">Buy</button><br/><br/>
                                        <button className="btn btn-outline-primary " onClick ={this.RemoveFunc}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    </div>
            );
        else return <div></div>
    }
}
export default withFirebase(Cart_Item);