import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ImageFetch from "./ImageFetch";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemLogs from "./ItemLogs";
class ItemLogs_Item extends Component {

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
    componentDidMount() {
        this.setState({ id: this.props.user.uid,itemkey:this.props.itemkey });
        this.getData();
    }
    render() {
        if (this.state.item)
            return (
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
export default withFirebase(ItemLogs_Item);