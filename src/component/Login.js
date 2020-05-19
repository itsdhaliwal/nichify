import React,{Component} from "react";

class Login extends Component {

    render() {
        return (
            
    <div class="card text-white bg-dark mb-3">
    <div class="card-body">
    <div class="col-md-7 mb-5">
      <label for="validationDefault02">Email</label>
      <input type="email" class="form-control" id="validationDefault02" placeholder="Email" required></input>
</div>
<div class="col-md-7 mb-5">
      <label for="validationDefault02">Password</label>
      <input type="password" class="form-control" id="validationDefault02" placeholder="password" required></input>
</div>
<button class="btn btn-outline-primary" type="submit">Login</button>
    </div>
    </div>
        )
    }
}

export default Login;


