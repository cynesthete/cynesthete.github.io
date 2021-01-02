import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="container pt-5">
        {/* <!--Images--> */}
        <img src="http://via.placeholder.com/150" />
        <img className="m-3" src="http://via.placeholder.com/150" />
        <img src="http://via.placeholder.com/150" />
        {/* <!--Row 2--> */}
      </div>
      <div className="container pt-5">
        {/* <!--Images--> */}
        <img src="http://via.placeholder.com/150" />
        <img className="m-3" src="http://via.placeholder.com/150" />
        <img src="http://via.placeholder.com/150" />
        {/* <!--Fixed Bottom--> */}
        <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
          <ul className="nav justify-content-center">
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

export default Portfolio;
