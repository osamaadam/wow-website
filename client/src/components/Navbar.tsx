import React from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar: React.FC = () => {
  const { state, dispatch } = React.useContext(UserContext);

  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch({ type: "logout" });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        home
      </Link>
      {!state.isLoggedIn && (
        <Link to="/register" className="navbar__link">
          register
        </Link>
      )}
      {state.isLoggedIn ? (
        <button className="button navbar__login" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="button navbar__login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
