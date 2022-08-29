import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="logo-wrapper">
             <h1>
               Alami Test
             </h1>
            </div>
          </div>
          <div className="col">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;