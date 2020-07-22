import React from "react";
import { UserContext } from "../context/UserContext";

const Home: React.FC = () => {
  const { state } = React.useContext(UserContext);

  return (
    <>
      {state.isLoggedIn ? (
        <h1>Hello, {state.user.username}!</h1>
      ) : (
        <h1>Hello, please join us!</h1>
      )}
    </>
  );
};

export default Home;
