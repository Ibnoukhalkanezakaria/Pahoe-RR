import React from "react";
import { Link } from "react-router-dom";
import "./Header.Style.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">PAHOE &reg;</Link>
          </div>
          <div className="nav-links">
            <ul>
              <Link to="/">Work</Link>
              <Link to="/about">About</Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
