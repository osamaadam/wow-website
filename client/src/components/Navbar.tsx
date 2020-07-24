import React from "react";
import "../scss/navbar.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { state, dispatch } = React.useContext(UserContext);

  const location = useLocation();

  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch({ type: "logout" });
  };

  return (
    <nav className="navbar">
      <NavLink
        activeClassName="navbar__link--highlighted"
        exact
        to="/"
        className="navbar__link"
      >
        home
      </NavLink>
      {!state.isLoggedIn && (
        <NavLink
          activeClassName="navbar__link--highlighted"
          to="/register"
          className="navbar__link"
        >
          register
        </NavLink>
      )}
      {state.isLoggedIn && (
        <NavLink
          activeClassName="navbar__link--highlighted"
          to="/profile"
          className="navbar__link"
        >
          profile
        </NavLink>
      )}
      {state.isLoggedIn ? (
        <button className="button navbar__login" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        location.pathname !== "/login" && (
          <NavLink
            activeClassName="navbar__link--highlighted"
            to="/login"
            className="button navbar__login"
          >
            Login
          </NavLink>
        )
      )}
    </nav>
  );
};

export default Navbar;
