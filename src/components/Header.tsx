import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const navBar: Record<string, string> = {
    "/": "Projects",
    "/about-me": "About Me",
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {Object.keys(navBar).map((path, index) => {
            const pathLabel: string = navBar[path];
            return (
              <li key={pathLabel}>
                <Link
                  to={path}
                  className={
                    "nav-link" + (location.pathname === path ? " active" : "")
                  }
                >
                  {pathLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
