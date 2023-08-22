import React from "react";

// import "../style/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/about-me" className="nav-link">
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
