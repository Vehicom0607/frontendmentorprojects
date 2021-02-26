import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import HomeNavbar from "./Home/HomeNavbar";
import React from "react";

function App() {
  return (
      <Router>
          <HomeNavbar />
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
