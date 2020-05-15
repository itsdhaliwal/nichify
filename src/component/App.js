import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SignUp from "./SignUp"

function App() {
  return (
    <Router basename="/">
      <Link to="/SignUp">Sign Up</Link>
      <Switch>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/**
 * git pull origin master
 * 
 * git add .
 * git commit -m "message"
 * git push origin master
 */