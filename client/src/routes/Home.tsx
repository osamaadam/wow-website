import React from "react";
import { UserContext } from "../context/UserContext";

const Home: React.FC = () => {
  const { state } = React.useContext(UserContext);

  return (
    <>
      <h1>
        Hello, {state.isLoggedIn ? state.user.username : "please join us"}!
      </h1>
    </>
  );
};

export default Home;
