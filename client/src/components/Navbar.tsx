import React from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar: React.FC = () => {
  const { state } = React.useContext(UserContext);

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
      {state.isLoggedIn && <span>Hello, {state.user.username}</span>}
    </nav>
  );
};

export default Navbar;
