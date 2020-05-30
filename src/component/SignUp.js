import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  f_name: "",
  l_name: "",
  email: "",
  pw1: "",
  pw2: "",
  city: "",
  state: "",
  error: null,
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = () => {
    const { f_name, l_name, email, pw1, city, state } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, pw1)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        this.props.firebase.user(authUser.user.uid).set({
          f_name,
          email,
          pw1,
          state,
          city,
        });
        this.props.history.push("/Home");
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
    //event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { f_name, l_name, email, pw1, pw2, state, city, error } = this.state;

    const isInvalid = pw1 !== pw2 || pw1 === "";

    return (
      <div
        className="d-flex pt-5 justify-content-center"
        style={{ backgroundColor: "powderblue", height: "95vh" }}
      >
        <div class="card col-6 text-white bg-dark mb-3">
          <div class="card-body">
            <form
              className="bg-dark"
              onSubmit={(e) => {
                e.preventDefault();
                this.onSubmit();
              }}
            >
              <div class="form-row">
                <div class="col-lg-7 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    placeholder="First Name"
                    name="f_name"
                    onChange={this.onChange}
                    value={f_name}
                    required
                  ></input>
                </div>
                <div class="col-md-7 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Last Name"
                    name="l_name"
                    onChange={this.onChange}
                    value={l_name}
                    required
                  ></input>
                </div>
                <div class="col-md-7 mb-3">
                  <label for="validationDefault02">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    required
                  ></input>
                </div>
                <div class="col-md-7 mb-3">
                  <label for="validationDefault02">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="password"
                    name="pw1"
                    onChange={this.onChange}
                    value={pw1}
                    required
                  ></input>
                </div>
                <div class="col-md-7 mb-3">
                  <label for="validationDefault02">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Confirm Password"
                    name="pw2"
                    onChange={this.onChange}
                    value={pw2}
                    required
                  ></input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-7 mb-3">
                  <label for="validationDefault03">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault03"
                    placeholder="City"
                    name="city"
                    onChange={this.onChange}
                    value={city}
                    required
                  ></input>
                </div>
                <div class="col-md-7 mb-5">
                  <label for="validationDefault04">State</label>
                  <select
                    class="custom-select"
                    id="validationDefault04"
                    name="state"
                    onChange={this.onChange}
                    value={state}
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>Andra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu and Kashmir</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Orissa</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telagana</option>
                    <option>Tripura</option>
                    <option>Uttaranchal</option>
                    <option>Uttar Pradesh</option>
                    <option>West Bengal</option>
                    <option>Andaman and Nicobar Islands</option>
                    <option>Chandigarh</option>
                    <option>Dadar and Nagar Haveli</option>
                    <option>Daman and Diu</option>
                    <option>Delhi</option>
                    <option>Lakshadeep</option>
                    <option>Pondicherry</option>
                  </select>
                </div>
                <div class="col-md-3 mb-5">
                  <label for="validationDefault05">Zip</label>
                  <input
                    type="number"
                    class="form-control"
                    id="validationDefault05"
                    name="zip"
                    required
                  ></input>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  ></input>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  class="btn btn-outline-primary"
                  disabled={isInvalid}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(SignUp));
