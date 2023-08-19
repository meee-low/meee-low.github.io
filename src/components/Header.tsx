import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-me">About Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
