import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ItemPage from "./ItemPage";
import ImageFetch from "./ImageFetch"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Buy extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <Link to="/ItemPage" class="btn btn-outline-primary">BUY</Link>
        <ImageFetch itemName = {this.props.itemName}/>
    </div> )
}

}
export default withFirebase(Buy);