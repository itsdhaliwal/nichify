import React,{ Component } from "react";
import hammer from "./hammer.jfif"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class ItemPage extends Component {
  
    render() {
      return (
        <div className="col-12 p-2" style={{backgroundColor:"powderblue"}}>
          <div className="d-inline-flex pt-5 justify-content-center col-6" style={{backgroundColor:"white",height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-black mb-3 shadow p-3 mb-5 rounded">
                    <div class="card-body" style={{backgroundColor:"powderblue"}}>
                        <img src={hammer} ></img>
                        <h4 class="card-title">Hand Crafted Thor's Hammmer</h4>
                    </div>
                </div>
            </div> 
            <div className="d-inline-flex pt-5 justify-content-center col-6" style={{backgroundColor:"white",height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-black mb-3 shadow p-3 mb-5 rounded">
                    <div class="card-body" style={{backgroundColor:"powderblue"}}>
                      <h1 class="card-title">Hand Crafted Thor's Hammmer</h1>
                      <p>this is hammmer which is handcrafted</p>
                    </div>
                </div>
            </div>
            <div className="d-inline-flex pt-5 justify-content-center col-6" style={{backgroundColor:"white",height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-black mb-3 shadow p-3 mb-5 rounded">
                    <div class="card-body" style={{backgroundColor:"powderblue"}}>
                    <Link to="Buy" className="btn btn-primary p-3" >Buy</Link>
                    <Link to="wishlist" className="btn btn-primary" >Wishlist</Link>
                    <Link to="/AddToCart" className="btn btn-primary" >Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
export default ItemPage;
