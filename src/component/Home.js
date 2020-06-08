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
import Item from"./Item";
import ItemFetch from"./ItemFetch"

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div style={{backgroundColor:"powderblue"}}>
            
        <div class="carousel cycle m-0 p-5 carousal slide shadow-lg p-3 mb-5 bg-light rounded " data-ride="carousel">
          <div class="carousel-inner m-0 p-0" style={{ height: "600px" }}>
            <div class="carousel-item active m-0 p-0 ">
              <Link to="/ItemPage">
              <img
                src={pic1}
                class="d-block col-12 m-0 "
                alt="img1" 
              ></img>
              </Link>
            </div>
            <div class="carousel-item">
              <img
                src={pic2}
                class="d-block col-12 m-0"
                alt="img2"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src={pic3}
                class="d-block col-12 m-0"
                alt="img3"
              ></img>
            </div>
            <div class="carousel-item m-0">
              <img
                src={pic4}
                class="d-block col-12"
                alt="img4"
              ></img>
            </div>
            <div class="carousel-item m-0">
              <img
                src={pic5}
                class="d-block col-12 m-0"
                alt="img5"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src={pic6}
                class="d-block col-12 m-0"
                alt="img6"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src={pic7}
                class="d-block col-12 m-0"
                alt="img7"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src={pic8}
                class="d-block col-12 m-0"
                alt="img8"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
           // href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
          <ItemFetch userID = {(this.props.user != null)?this.props.user.uid:''}/>
        </div>
    );
  }
}

export default Home;
