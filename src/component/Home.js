import React, { Component } from "react";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import pic4 from "./4.jpg";
import pic5 from "./5.jpg";
import pic6 from "./6.jpg";
import pic7 from "./7.jpg";
import pic8 from "./8.jpg";
import ItemPage from "./ItemPage";
import Item from "./Item";
import ItemFetch from "./ItemFetch"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TypeFetcher from "./TypeFetcher";

//        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
class Home extends Component {
  render() {

    return (
      <div >
        <div id="mycorousel" className="carousel slide m-0 p-5 carousal slide p-3 mb-5 rounded " data-ride="carousel">
          <div className="carousel-inner m-0 p-0" style={{ height: "600px" }}>
          <ol class="carousel-indicators">
            <li data-target="#mycorousel" data-slide-to="0" class="active"></li>
            <li data-target="#mycorousel" data-slide-to="1"></li>
            <li data-target="#mycorousel" data-slide-to="2"></li>
            <li data-target="#mycorousel" data-slide-to="3"></li>
            <li data-target="#mycorousel" data-slide-to="4"></li>
            <li data-target="#mycorousel" data-slide-to="5"></li>
            <li data-target="#mycorousel" data-slide-to="6"></li>
            <li data-target="#mycorousel" data-slide-to="7"></li>
          </ol>
            <div className="carousel-item active m-0 p-0 ">
              <img src={pic1} className="d-block col-12 m-0 " alt="img1"  ></img>
            </div>
            <div className="carousel-item ">
              <img src={pic2} className="d-block col-12 m-0" alt="img2" ></img>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block col-12 m-0" alt="img3"></img>
            </div>
            <div className="carousel-item m-0">
              <img src={pic4} className="d-block col-12" alt="img4" ></img>
            </div>
            <div className="carousel-item m-0">
              <img src={pic5} className="d-block col-12" alt="img5" ></img>
            </div>
            <div className="carousel-item m-0">
              <img src={pic6} className="d-block col-12" alt="img6" ></img>
            </div>
            <div className="carousel-item m-0">
              <img src={pic7} className="d-block col-12" alt="img7" ></img>
            </div>
            <div className="carousel-item m-0">
              <img src={pic8} className="d-block col-12" alt="img8" ></img>
            </div>
          </div>
          <a className="carousel-control-prev" href="#mycorousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#mycorousel" role="button" data-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <ItemFetch userID={(this.props.user != null) ? this.props.user.uid : ''} />
      </div>
    );
  }
}

export default Home;
