import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
                    <a href="https://www.instagram.com/cynesthete/">
                    <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://www.github.com/cynesthete/">
                    <i class="fab fa-github-square"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://www.linkedin.com/in/tonyjrivas/">
                    <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <div class = "col-sm-3">
                    <a href="https://docs.google.com/document/d/1jKhI8YeFQsg9i_OOUctZp6NxL2IrWkFeV4nO5tXGZrI/edit">
                    <i class="far fa-file"></i>
                    </a>
                  </div>
                </div>
                <br></br>
                <div class = "row center">
                  <p>Tony J Rivas // tonyjrivas@gmail.com</p>
                </div>
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