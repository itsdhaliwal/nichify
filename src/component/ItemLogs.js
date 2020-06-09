import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";
import ItemLogs_Item from "./ItemLogs_Item"

class ItemLogs extends Component {
    state = { items: null }

    getData = () => {
        var itemName;
        console.log("Fecth Data");
        this.props.firebase.db.ref("users/" + this.props.user.uid +"/itemlogs/items").on('value', (snapshot) => {
          var items1 = snapshot.val();
          console.log(items1);
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
                    <h1>Items Uploaded</h1>
                    {Object.keys(this.state.items).map((key) => {
                        return (
                            <div >
                                <ItemLogs_Item itemkey= {key} user={this.props.user} />
                            </div>)
                    })
                    }
                </div>
            );
        else
            return (
                <div>
                    <br/>
                    <div><h3>Item Uploaded Logs</h3></div><br />
                   Add something...
                </div>
            )
    }
}
export default withFirebase(ItemLogs);