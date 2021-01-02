import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div class="container">
        {/* <!--Card--> */}
        <div class="row cyn-row">
          <div class="col-md-8 col-sm-12 offset-md-2">
            <div class="card">
              <img src="./assets/images/tjrvs_1.jpg" alt="visage" />
              <div class="card-body">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/cynesthete/">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Fixed Bottom--> */}
        <nav class="navbar fixed-bottom navbar-light bg-light justify-content-center">
          <ul class="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
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

export default Contact