import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withFirebase } from "./Firebase";
import Navbar from "./navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ItemPage from "./ItemPage";
import Item from "./Item";
import ProfilePage from "./ProfilePage";
import ItemUploader from "./ItemUploader";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

class App extends Component {
  state = {
    userData: null,
    loggedUser: null };
  fetchUserName = () => {
    if (this.state.userData != null) {
      this.props.firebase.db
        .ref("users/" + this.state.userData.uid)
        .on("value",(snapshot) => {
          const user = (snapshot.val()) || "Anonymous";
          if (this.state.loggedUser==null ||(this.state.loggedUser && this.state.loggedUser.f_name != user.f_name)) {
            this.setState({ loggedUser: user });
          }
        });
    }
  };
  fetchUserData = () => {
    this.props.firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser != this.state.userData)
        authUser
          ? this.setState({ userData: authUser })
          : this.setState({ userData: null });
    });
  };
  componentDidUpdate() {
    console.log("updated")
    this.fetchUserName();
  }
  componentDidMount() {
    this.fetchUserData();
  }
  render() {
    if(this.state.userData==null || this.state.loggedUser==null) 
    return (
      <Router basename="/">
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Home">
              <div>
                <Home />
              </div>
            </Route>
            <Route path="/itemPage">
              <ItemPage />
            </Route>
            <Route path="/">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
    else
    return (
      <Router basename="/">
        <div style={{ minHeight: "100vh" }}>
          <Navbar f_name={this.state.loggedUser.f_name} user={this.state.userData} />
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/ProfilePage">
              <ProfilePage user={this.state.loggedUser}  />
            </Route>
            <Route path="/ItemUploader">
              <ItemUploader />
            </Route>
            <Route path="/Cart">
              <Cart user={this.state.userData}/>
            </Route>
            <Route path="/Wishlist">
              <Wishlist user={this.state.userData}/>
            </Route>
            <Route path="/Home">
                <Home user={this.state.userData}/>
            </Route>
           
            <Route path="/itemPage/:id?" render={(props) => (
          <ItemPage authUser={this.state.userData} />)
        } />
            <Route path="/Item/:id?" render={(props) => (
          <Item authUser={this.state.userData} />)
        } />
            <Route path="/">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withFirebase(App);

/**
 * git pull origin master
 *
 * git add .
 * git commit -m "message"
 * git push origin master
 */

/*
      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="/__/firebase/7.14.5/firebase-app.js"></script>

      <!-- TODO: Add SDKs for Firebase products that you want to use
           https://firebase.google.com/docs/web/setup#available-libraries -->
      <script src="/__/firebase/7.14.5/firebase-analytics.js"></script>

      <!-- Initialize Firebase -->
      <script src="/__/firebase/init.js"></script>
*/
