import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import "./scss/main.scss";
import Navbar from "./components/Navbar";
import Register from "./routes/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
