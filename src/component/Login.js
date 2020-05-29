import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import SignOut from "./SignOut";

    const SignIn = () => (
        <div>
            <SignInForm />
        </div>
    );
    const INITIAL_STATE = {
        email: "",
        password: "",
        error: null
    };
    class SignInFormBase extends Component {
        constructor(props) {
            super(props);
            this.state = { ...INITIAL_STATE };
        }
        onSubmit = (event) => {
            const { email, password } = this.state;
            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then((authUser) => {
                    this.setState({ error: null });
                    this.props.history.push("/Home");
                })
                .catch(error => {
                    this.setState({ error });
                });
          //  event.preventDefault();
        };
        onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="bg-dark">
            <div className="d-flex pt-5 justify-content-center" style={{backgroundColor:"powderblue", height:"60vh"}}>
                <div class="card col-6 text-white bg-dark mb-3">
                <h1 >Login</h1>
                    <div class="card-body">
                        <form 
                        className="bg-color:dark"
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.onSubmit();
                        }}
                        >
                        <div class="form-row">
                            <div class="col-md-7 mb-3">
                            <label for="validationDefault02">Email</label>
                            <input 
                            type="email" 
                            class="form-control" 
                            id="validationDefault02" 
                            placeholder="Email" 
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            required></input>
                            </div>
                            <div class="col-md-7 mb-3">
                            <label for="validationDefault02">Password</label>
                            <input type="password" 
                            class="form-control" 
                            id="validationDefault02" 
                            placeholder="password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            required></input>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button class="btn btn-outline-primary" type="submit">Login</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


class SignInGoogleBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    onSubmit = event => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.user.displayName,
                    email: socialAuthUser.user.email,
                    roles: {}
                });
            })
            .then(() => {
                this.setState({ error: null });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };
    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <button class="btn btn-primary my-2" type="submit">
                    Sign In with Google
        </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

class SignInFacebookBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    onSubmit = event => {
        this.props.firebase
            .doSignInWithFacebook()
            .then(socialAuthUser => {
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {}
                });
            })
            .then(() => {
                this.setState({ error: null });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <button class="btn btn-primary my-2" type="submit">
                    Sign In with Facebook
        </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

class SignInTwitterBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    onSubmit = event => {
        this.props.firebase
            .doSignInWithTwitter()
            .then(socialAuthUser => {
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    /*username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {}*/
                });
            })
            .then(() => {
                this.setState({ error: null });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <button class="btn btn-primary my-2" type="submit">
                    Sign In with Twitter
        </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInTwitter = withFirebase(SignInTwitterBase);
const SignInFacebook = withFirebase(SignInFacebookBase);
const SignInForm = withRouter(withFirebase(SignInFormBase));
const SignInGoogle = withFirebase(SignInGoogleBase);
export default SignIn;
export { SignInForm, SignInGoogle, SignInFacebook };
 