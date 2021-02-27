import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import HomeNavbar from "./Home/HomeNavbar";
import React from "react";
import FaqAccordian from "./FaqAccordian/FaqAccordian";

function App() {
  return (
      <Router>
          <HomeNavbar />
          <Switch>
              <Route path="/FAQ-ACCORDION" component={FaqAccordian} />
              <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
