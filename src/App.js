import './App.css';
import {Switch, Route, useLocation} from "react-router-dom";
import Home from "./Home/Home";
import HomeNavbar from "./Home/HomeNavbar";
import React from "react";
import FaqAccordian from "./FaqAccordian/FaqAccordian";
import ProfileCard from "./ProfileCard/ProfileCard";

const setBackground = (pathname) => {
    if (pathname === '/profile-card') {
        return {backgroundColor: 'hsl(185, 75%, 39%)', height: '1000px', backgroundImage: "url('/ProfileCard/bg-pattern-top.svg')"}
    }
}

function App() {
    let bgStyle;
    bgStyle = setBackground(useLocation().pathname)


  return (
      <div style={bgStyle}>
          <HomeNavbar />
          <Switch>
              <Route path="/profile-card" component={ProfileCard}/>
              <Route path="/FAQ-ACCORDION" component={FaqAccordian} />
              <Route exact path="/" component={Home} />
          </Switch>
      </div>
  );
}

export default App;
