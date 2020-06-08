import React,{ Component } from "react";
import hammer from "./hammer.jfif";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {withFirebase} from "./Firebase"
import { Link, withRouter} from "react-router-dom";

class AddMoney extends Component {
    constructor(props) {
        super(props);
      }
  state={
    input:0,
    bal:0,
    id:null
  }
  
  componentDidMount() {
    this.props.firebase.db.ref("users/"+this.props.firebase.auth.currentUser.uid+"/Balance")
    .on('value',(snapshot)=>{
      const balance=snapshot.val();
      this.setState({bal:balance})
    })
  }
  AddBal=()=>{
    this.props.firebase.db.ref("users/"+this.props.firebase.auth.currentUser.uid+"/Balance")
    .on('value',(snapshot)=>{
      const bal=snapshot.val();
      this.setState({bal:bal})
    })
    var c=parseInt(document.getElementById('inp').value);
    if(c<0){
      alert("Money Added Cannot be less than zero")
    }
    else{
    var updates = {}
    var a=this.state.bal+c;
    updates["users/"+this.props.firebase.auth.currentUser.uid+"/Balance"]=this.state.bal+c
        this.props.firebase.db.ref().update(updates);
        }
    }
  render() {
      
      return <div className="row">
        
      <div className="col-12"  >current Balance:<div id="balance" >{this.state.bal}</div></div>
      <input type="number" Placeholder="Type Money you want to Add" className="col-4"  name="AddBal" id="inp" ></input>
      <button className="btn btn-dark" onClick={()=>{this.AddBal()}}>ADD</button></div>
    }
}
export default withRouter(withFirebase(AddMoney));