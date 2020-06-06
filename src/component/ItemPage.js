import React,{ Component } from "react";
import hammer from "./hammer.jfif";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ImageFetch from "./ImageFetch"
import {withFirebase} from "./Firebase"
import { Link, withRouter} from "react-router-dom";

class ItemPage extends Component {

  state={
  item:null
  }
  getData = () => { 
    var itemName;
    console.log("Fecth Data");
    this.props.firebase.db.ref("public/listings/"+this.props.match.params.id).on('value',(snapshot) => {
        var item = snapshot.val();
        console.log(item);
        console.log("done");
        this.setState({item:item})
    });
  }
  componentDidMount() {
    this.setState({id:this.props.match.params.id})
    this.getData();
}
    render() {
      if(this.state.item)
      return (
        <div  style={{backgroundColor:"white"}}>
         <div className="row p-4">
            <div className="col-4">
                <div className="card shadow p-3 bg-white rounded ">
                <div className="" style={{backgroundColor:"powderblue" ,height:"350px"}}>
                <div class="card-body">
                <ImageFetch itemName = {this.props.match.params.id}/>
                  <h4 class="card-title">Hand Crafted Thor's Hammmer</h4>
                </div>
                </div>
                </div>
            </div> 
             <div className="col-4 ">
             <div className="card shadow p-3  bg-white rounded " style={{height:"375px"}}>
                <div className="mb-1" style={{backgroundColor:"powderblue",height:"355px"}}>
                <div class="card-body">
                <h1 class="card-title">Hand Crafted Thor's Hammmer</h1>
                <p>{this.state.item.itemDesc}</p>
                </div>
                </div>
                </div>
             </div>
             <div className="col-4 ">
             <div className="card shadow p-3 bg-white rounded " style={{height:"375px"}}>
                <div className="mb-1" style={{backgroundColor:"powderblue",height:"355px"}}>
                <div class="card-body">
                <div className="pt-5">
                    <Link to="Buy" className="btn btn-outline-primary p-2 pr-5" >Buy</Link>
                    </div>
                    <div className="pt-5">
                    <Link to="wishlist" className="btn btn-outline-primary p-2 pr-4" >Add to Wishlist</Link>
                    </div>
                    <div className="pt-5">
                    <Link to="/AddToCart" className="btn btn-outline-primary p-2" >Add to cart</Link>
                    </div>
                </div>
                </div>
                </div>
             </div>
         </div>   
         </div>
      );
      else return <div></div>
    }
}
export default withRouter(withFirebase(ItemPage));
