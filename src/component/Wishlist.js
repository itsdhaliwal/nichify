import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import Cart_Item from "./Cart_Item"

class Wishlist extends Component {
    state = { items: null }

    getData = () => {
        var itemName;
        console.log("Fecth Data");
        this.props.firebase.db.ref("users/" + this.props.user.uid +"/wishlist/items").on('value', (snapshot) => {
          var items1 = snapshot.val();
          console.log("done");
          this.setState({ items: items1 })
        });
      }
    componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.state.items);
        if (this.state.items)
            return (
                <div>
                    <h1>Wishlist</h1>
                    {Object.keys(this.state.items).map((key) => {
                        return (
                            <div >
                                <Cart_Item itemkey= {key} user={this.props.user} type="wishlist"/>
                            </div>)
                    })
                    }
                </div>
            );
        else
            return (
                <div>
                   Add something...
                </div>
            )
    }
}
export default withFirebase(Wishlist);