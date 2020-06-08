import React,{ Component } from "react";
import hammer from "./hammer.jfif";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {withFirebase} from "./Firebase"
import { Link, withRouter} from "react-router-dom";

class Buy extends Component {
  state={
    input:0,
    bal:0,
    id:null
  }
  
  componentDidMount() {
    this.props.firebase.db.ref("users/"+this.props.firebase.auth.currentUser.uid+"/Balance")
    .on('value',(snapshot)=>{
      //console.log("hiiiiiiiiiiiiiiiiiii")
      //console.log(this.props.firebase.auth.currentUser.uid);
      const balance=snapshot.val();
      this.setState({id:this.props.match.params.id,bal:balance})
    })
    
    
    //this.setState({bal:this.props.user.Balance})
  }
  reduceBal=()=>{
    //const x=this.props.user.Balance;
    this.props.firebase.db.ref("users/"+this.props.firebase.auth.currentUser.uid+"/Balance")
    .on('value',(snapshot)=>{
      //console.log("hiiiiiiiiiiiiiiiiiii")
      //console.log(this.props.firebase.auth.currentUser.uid);
      const bal=snapshot.val();
      this.setState({id:this.props.match.params.id,bal:bal})
    })
    var i = parseInt(this.props.match.params.id);
    //this.setState({bal:233})
  //  console.log("this.props.match.params.id")
    var updates = {}
    var a=this.state.bal-i;
    updates["users/"+this.props.firebase.auth.currentUser.uid+"/Balance"]=this.state.bal-i
    if(a<0){
        alert("Not Enough balance");
    }
    else
    {
        this.props.firebase.db.ref().update(updates);
    }
  }
  render() {
    console.log(this.props.match.params.id)
    return <div className="row">
      <div className="col-12">current Balance :{this.state.bal}</div>
      <button className="btn btn-dark" onClick={()=>{this.reduceBal()}}>Buy</button></div>
    }
}
export default withRouter(withFirebase(Buy));