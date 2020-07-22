import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { initialState, UserContext, userReducer } from "./context/UserContext";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "./scss/main.scss";

const App = () => {
  const [userContext, dispatch] = React.useReducer(userReducer, initialState);

  return (
    <Router>
      <UserContext.Provider value={{ state: userContext, dispatch }}>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </main>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
