import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="container">
        {/* <!--Card--> */}
        <div className="row cyn-row">
          <div className="col-md-8 col-sm-12 offset-md-2">
            <div className="card">
              <img src="./assets/images/tjrvs_1.jpg" alt="visage" />
              <div className="card-body">
                <div className = "row center">
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/jsfundamentalsquiz">
                    <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/passwordgenerator">
                    <i class="fab fa-github-square"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/workouttracker">
                    <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/employeetracker">
                    <i class="far fa-file"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/weatherapplication">
                    <i class="far fa-file"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/notetaker">
                    <i class="far fa-file"></i>
                    </a>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Fixed Bottom--> */}
        <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                About
              </Link>
            </li>
            <li classsName="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Portfolio;
