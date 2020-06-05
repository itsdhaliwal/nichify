import React,{Component} from "react";
import {withRouter} from "react-router-dom"
import { withFirebase } from "./Firebase";
import hammer from "./hammer.jfif"
import ItemPage from "./ItemPage";
import ImageFetch from "./ImageFetch"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Item extends Component {
    state={id:null,items:null}
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
        this.setState({id:this.props.match.params.id})
        this.getData();
    }
    render() {
        return (
            <div className="d-inline-flex pt-5 justify-content-center " style={{height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-5 mb-5 bg-dark rounded">
                    <div class="card-body">
                        <img src={hammer} ></img>
                        <h4 class="card-title">Hand Crafted Thor's Hammmer {this.state.id}</h4>
                        <p class="card-text">this.state.items[id].itemName</p>
                        <p class="card-text">Rs. 499</p>
                        <Link to="/Item" class="btn btn-outline-primary">BUY</Link>
                    </div>
                </div>
            </div>                        
        );
    }
}

export default withRouter(Item);


