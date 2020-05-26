import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./navbar";




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SignUp from "./SignUp"
import Login from "./Login";
import Home from "./Home";
import Item from "./Item";

class App extends Component {
render(){
  return (
    <Router basename="/">
      <div style={{minHeight:"100vh"}}>
        <Navbar/>
      <Switch>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/">
          <div>Page Not Found</div>
        </Route>
      </Switch>
      <Item/>
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