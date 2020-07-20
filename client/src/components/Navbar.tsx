import React from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        home
      </Link>
      <Link to="/register" className="navbar__link">
        register
      </Link>
      <Link to="/login" className="navbar__link">
        login
      </Link>
    </nav>
  );
};

export default Navbar;
