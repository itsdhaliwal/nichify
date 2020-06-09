import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ImageFetch from "./ImageFetch";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
class Cart_Item extends Component {

    state = {
        item: null
    }
constructor(props){
    super(props);
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
    componentDidUpdate() {
        console.log(this.props)
        console.log(this.state)
        if(this.props.itemkey!=this.state.itemkey){
        this.setState({ itemkey: this.props.itemkey });
        console.log(this.props.user.uid);
        this.getData();}
    }
    RemoveFunc = () =>{
        var updates = {}
        if(this.props.type == "cart")
        updates["users/" + this.state.id +"/cart/items/"+this.props.itemkey]={}
        else
        updates["users/" + this.state.id +"/wishlist/items/"+this.props.itemkey]={}
        this.props.firebase.db.ref().update(updates);
        //let userRef = this.props.firebase.db.ref("users/" + this.state.id +"/cart/items/" + this.state.removekey);
        //console.log(this.state.id);
        //userRef.remove();
    }
    WhilistMover = () =>{
        this.RemoveFunc();
        var updates = {};
        updates["users/" + this.state.id +"/wishlist/items/" + this.props.itemkey] = {confirmed:false,shipped:false,delivered:false,cancelled:false};
        return this.props.firebase.db.ref().update(updates);
    }
    CartMover = () =>{
        this.RemoveFunc();
        var updates = {};
        updates["users/" + this.state.id +"/cart/items/" + this.props.itemkey] = {confirmed:false,shipped:false,delivered:false,cancelled:false};
        return this.props.firebase.db.ref().update(updates);
    }
    Mover = () =>{
        if(this.props.type == "cart")
            this.WhilistMover();
        else
            this.CartMover();
    }
    componentDidMount() {
        this.setState({ id: this.props.user.uid,itemkey:this.props.itemkey });
        console.log(this.props.user.uid);
        this.getData();
        console.log(this.props.type)
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
                                    <div class="col-sm m-2">
                                        <ImageFetch itemName={this.props.itemkey} />
                                    </div>
                                    <div class="col-sm">
                                        <h4 class="card-title">{this.state.item.itemName}</h4>
                                        <p>{this.state.item.itemDesc}</p>
                                        <p>Rs.{this.state.item.itemPrice}</p>
                                    </div>
                                    <div class="col-sm">
                                        <Link className="btn btn-outline-primary" to={"/ItemPage/" + this.props.itemkey}>
                                         View Item
                                         </Link><br/><br/>
                                        <button className="btn btn-outline-primary " 
                                        onClick ={()=>{this.Mover()}}>Move to {(this.props.type == "cart")?"Wishlist":"Cart"}</button>
                                        <br/><br/>
                                        <button className="btn btn-outline-primary " onClick ={()=>{this.RemoveFunc()}}>Remove</button>
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