import React from "react";
import {Link} from "react-router-dom";

function About(){


    return(
        <div className="container">
        <div id="cyn-margin" className="row cyn-row">
            <div className="col-md-8 col-sm-12 offset-md-2">
                <div className="card">
                    <div className="card-body">
                        <img id = "mainImage" className="float-left" src="/assets/images/tjrvs_1.jpg" alt="TonyJRivas" />
                        <p>Tony J Rivas is a filmmaker, musician, and programmer with an affinity for audiovisual aesthetics. He holds a MA in Film Studies from Chapman University and a BA in Screenwriting from Westminster College.</p>
                        <p>
                            <span>Recently, Tony wrote, directed, and scored his short film, <a href="https://www.youtube.com/watch?v=bYMnGHmMTjY&t=188s">The Thing From The Hallway</a>, which won the Best Horror Short Award from the Glendale International Film Festival and was an official selection at several others.</span>
                            <span>The film, which was adapted from a short story by Soren Narnia, combines his love of the horror genre with his distinctive restraint and spooky sound design.</span>
                            <p>Presently, Tony is focussing on coding and full stack web development, which will tie in with his writing and music programming sensibilities. In addition to sharpening his programming skills, he hopes to eventually use his newfound skills to design his own custom digital instruments.</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--Fixed Bottom--> */}
        <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default About