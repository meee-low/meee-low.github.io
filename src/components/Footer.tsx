import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; Matheus Ferreira Drumond {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
