import React,{Component} from "react";
class SignUp extends Component {

    render() {
        return(
          <div className="d-flex pt-5 justify-content-center" style={{backgroundColor:"powderblue", height:"95vh"}}>
            <div class="card col-6 text-white bg-dark mb-3">
  <div class="card-body">
      
  <form className="bg-color:dark">
  <div class="form-row">
    <div class="col-lg-7 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First Name" required></input>
    </div>
    <div class="col-md-7 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last Name" required></input>
    </div>
    <div class="col-md-7 mb-3">
      <label for="validationDefault02">Email</label>
      <input type="email" class="form-control" id="validationDefault02" placeholder="Email" required></input>
    </div>
    <div class="col-md-7 mb-3">
      <label for="validationDefault02">Password</label>
      <input type="password" class="form-control" id="validationDefault02" placeholder="password" required></input>
    </div>
    <div class="col-md-7 mb-3">
      <label for="validationDefault02">Confirm Password</label>
      <input type="password" class="form-control" id="validationDefault02" placeholder="Confirm Password" required></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-7 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City"required></input>
    </div>
    <div class="col-md-7 mb-5">
      <label for="validationDefault04">State</label>
      <select class="custom-select" id="validationDefault04" required>
        <option selected disabled value="">Choose...</option>
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
      <input type="text" class="form-control" id="validationDefault05" required></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="d-flex justify-content-center">
  <button class="btn btn-outline-primary" type="submit">Sign Up</button>
  </div>
</form>

  </div>
</div>
</div>
        )
    }
}

export default SignUp;







