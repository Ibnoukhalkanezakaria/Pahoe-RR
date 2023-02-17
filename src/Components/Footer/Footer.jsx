import React from "react";
import "./Footer.Style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-cnp">
      <div className="container">
        <div className="even-columns">
          <div className="col">
            <span>&copy; ibnoukhalkane 2023 - Design By Daywork</span>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to="/">Work</Link>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/zakaria-ibnoukhalkane-0758a2220/"
                  target="blank"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a target="blank" href="https://twitter.com/Ibnoukhalkanee">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
