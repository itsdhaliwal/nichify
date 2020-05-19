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

class App extends Component {
render(){
  return (
    <Router basename="/">
      <div>
        <Navbar/>
        <Link to="/SignUp">Sign Up</Link>
      <Switch>
        <Route path="/SignUp">
          <SignUp/>
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