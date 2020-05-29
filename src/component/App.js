import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ItemPage from "./ItemPage";
import Item from "./Item";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Home">
              <div >
              <Navbar />
              <Home />
              </div>    
            </Route>
            <Route path="/itemPage">
            <Navbar />
              <ItemPage/>
            </Route>
            <Route path="/">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

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
