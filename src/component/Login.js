import React,{Component} from "react";

class Login extends Component {

    render() {
        return (
            <div className="d-flex pt-5 justify-content-center" style={{backgroundColor:"powderblue", height:"50vh"}}>
                <div class="card col-6 text-white bg-dark mb-3">
                    <div class="card-body">
                        <form className="bg-color:dark">
                        <div class="form-row">
                            <div class="col-md-7 mb-3">
                            <label for="validationDefault02">Email</label>
                            <input type="email" class="form-control" id="validationDefault02" placeholder="Email" required></input>
                            </div>
                            <div class="col-md-7 mb-3">
                            <label for="validationDefault02">Password</label>
                            <input type="password" class="form-control" id="validationDefault02" placeholder="password" required></input>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button class="btn btn-outline-primary" type="submit">Login</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;


