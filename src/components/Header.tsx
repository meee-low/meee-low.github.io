import React from "react";
import { Link } from "react-router-dom";
// import "../style/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about-me" className="nav-link">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
