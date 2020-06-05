import React,{Component} from "react";
import {withRouter} from "react-router-dom"
import hammer from "./hammer.jfif"
import ItemPage from "./ItemPage";
import ImageFetch from "./ImageFetch"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Item extends Component {
    state={id:null}
    componentDidMount() {
        this.setState({id:this.props.match.params.id})
    }
    render() {
        return (
            <div className="d-inline-flex pt-5 justify-content-center " style={{height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-white mb-3 bg-dark shadow-lg p-5 mb-5 bg-dark rounded">
                    <div class="card-body">
                        <img src={hammer} ></img>
                        <h4 class="card-title">Hand Crafted Thor's Hammmer {this.state.id}</h4>
                        <p class="card-text">This is a hand crafted model.It took three weeks to make this.</p>
                        <p class="card-text">Rs. 499</p>
                        <Link to="/Item" class="btn btn-outline-primary">BUY</Link>
                    </div>
                </div>
            </div>                        
        );
    }
}

export default withRouter(Item);


