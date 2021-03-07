import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import React from "react";
import FaqAccordian from "./Challenges/FaqAccordian/FaqAccordian";
import ProfileCard from "./Challenges/ProfileCard/ProfileCard";
import ArticlePreview from "./Challenges/ArticlePreview/ArticlePreview";

function App() {


  return (
      <div>
          <Switch>
              <Route path="/profile-card" component={ProfileCard}/>
              <Route path="/faq-accordion" component={FaqAccordian} />
              <Route path="/article-preview" component={ArticlePreview} />
              <Route exact path="/" component={Home} />
          </Switch>
      </div>
  );
}

export default App;
