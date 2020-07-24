import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { initialState, UserContext, userReducer } from "./context/UserContext";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "./scss/main.scss";
import Profile from "./routes/Profile";

const App = () => {
  const [userContext, dispatch] = React.useReducer(userReducer, initialState);

  const [getUser, { data, loading, error }] = useLazyQuery<{
    info: {
      user: User;
      token: string;
    };
  }>(
    gql`
      query user {
        info: user {
          user {
            id
            username
            email
            last_ip
            last_attempt_ip
            mutetime
            mutereason
            muteby
          }
          token
        }
      }
    `
  );

  React.useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!userContext.user.id && token) {
      getUser();
    }
  }, [userContext.user.id, getUser]);

  React.useLayoutEffect(() => {
    if (!loading && data) {
      dispatch({
        type: "login",
        payload: { user: { ...data.info.user }, token: data.info.token },
      });
    }
    if (error) dispatch({ type: "logout" });
  }, [data, loading, error]);

  return (
    <Router>
      <UserContext.Provider value={{ state: userContext, dispatch }}>
        <Navbar />
        <main className="container">
          <article className="card">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                {userContext.isLoggedIn ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route exact path="/register">
                {userContext.isLoggedIn ? <Redirect to="/" /> : <Register />}
              </Route>
              <Route path="/profile">
                {userContext.isLoggedIn ? <Profile /> : <Redirect to="/" />}
              </Route>
            </Switch>
          </article>
        </main>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
