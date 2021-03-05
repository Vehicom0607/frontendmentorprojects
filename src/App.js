import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import React from "react";
import FaqAccordian from "./FaqAccordian/FaqAccordian";
import ProfileCard from "./ProfileCard/ProfileCard";


function App() {


  return (
      <div>
          <Switch>
              <Route path="/profile-card" component={ProfileCard}/>
              <Route path="/faq-accordion" component={FaqAccordian} />
              <Route exact path="/" component={Home} />
          </Switch>
      </div>
  );
}

export default App;
