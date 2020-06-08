import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png"
import Navigation from "./Navigation"
import { withFirebase } from "./Firebase";

class Navbar extends Component {

  state = { items: null, search: null, Key: null }
  getData = () => {
    const itemRef = this.props.firebase.db.ref("public/listings");
    itemRef.on('value', (snapshot) => {
      var items = snapshot.val();
      this.setState({ items: items })
    });
  }
  onSubmit = (event) => {
    var flag=0;
    if (this.state.items != null) {
      Object.keys(this.state.items).map((itemKey) => {
        if (this.state.items[itemKey].itemName == this.state.search) {
          this.setState({ Key: itemKey });
          console.log(this.state.items[itemKey].itemName );
          flag=1;
        }
      })
    }
    if(flag==0){
      console.log("Not Found");
    }
  }
  onChange = (event) => {
    this.setState({ search: event.target.value });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    var item_name = this.state.search;
    return (
      <div className="m-0">
        <nav className="navbar m-0 navbar-expand-lg navbar-Dark bg-dark">
          <div className="col-2">
    <Link class="navbar-brand" to="/Home"><b>Nichify</b></Link>
            <img src={logo} style={{ height: "60px" }}></img>
          </div>
          <div class="col-6 d-flex justify-content-center">
            <form class="form-inline col-12" onSubmit={(e) => { e.preventDefault(); this.onSubmit(); }} >
              <input class="form-control mr-sm-2 flex-grow-1" type="search" placeholder="Search" value={item_name} onChange={this.onChange}></input>
              
              <Link className="btn btn-outline-success my-2 my-sm-0" to={"/ItemPage/" + this.state.Key}>
                      Search
                </Link>
            </form>
          </div>
          <div className="col-4 justify-content-center justify-content-sm-end">
            <Navigation user={this.props.user} f_name={this.props.f_name} Bal = {this.props.Bal}></Navigation>
          </div>
          <div>
          </div>
        </nav>
      </div>

    );
  }
}
export default withFirebase(Navbar);
