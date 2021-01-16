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
                    <i class="fab fa-js-square"></i>
                    </a>
                    <p>JS Fundamentals Quiz</p>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/passwordgenerator">
                    <i class="fas fa-unlock-alt"></i>
                    </a>
                    <p>Password Generator</p>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/workouttracker">
                    <i class="fas fa-dumbbell"></i>
                    </a>
                    <p>Workout Tracker</p>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/employeetracker">
                    <i class="fas fa-code-branch"></i>
                    </a>
                    <p>Employee Tracker</p>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/weatherapplication">
                    <i class="fas fa-sun"></i>
                    </a>
                    <p>Weather Application</p>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://github.com/cynesthete/notetaker">
                    <i class="fas fa-pen-alt"></i>
                    </a>
                    <p>Note Taker Application</p>
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
