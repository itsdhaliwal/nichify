import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png";
import Navigation from "./Navigation";
import { withFirebase } from "./Firebase";

class Navbar2 extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div className="bg-dark">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bangles
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={"/TypeFetcher/GoldBangles"} className="btn">
                    Gold Bangles
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/DiamondBangles" className="btn">
                    Diamond Bangles
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/GlassBangles" className="btn">
                    Glass Bangles
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div className="bg-lights">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Art
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={"/TypeFetcher/VoxelArt"} className="btn">
                    Voxel Art
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/2DArt" className="btn">
                    2D Art
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/GameArt" className="btn">
                    Game Art
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div className="bg-lights">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bracelets
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={"/TypeFetcher/SeaShells"} className="btn">
                    Sea Shells
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/Couple" className="btn">
                    Couple's Special
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/Friendship" className="btn">
                    FriendShip Bracelets
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div className="bg-lights">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  KeyChain
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to={"/TypeFetcher/PaperKeyChain"} className="btn">
                    Paper Key Chains
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/InitialKeyChain" className="btn">
                    Initials Key Chain
                  </Link>
                  <br />
                  <Link to="/TypeFetcher/WoodenKeyChain" className="btn">
                    Wooden Key Chain
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebase(Navbar2);
