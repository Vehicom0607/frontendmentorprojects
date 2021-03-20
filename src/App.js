import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import React from "react";
import FaqAccordian from "./Challenges/FaqAccordian/FaqAccordian";
import ProfileCard from "./Challenges/ProfileCard/ProfileCard";
import ArticlePreview from "./Challenges/ArticlePreview/ArticlePreview";
import IntroSignupForm from "./Challenges/IntroSignupForm/IntroSignupForm";
import IPC from "./Challenges/IPC/IPC";
import Blogr from "./Challenges/blogr/blogr";
function App() {


  return (
      <div>
          <Switch>
              <Route path="/blogr" component={Blogr} />
              <Route path="/ipc" component={IPC} />
              <Route path="/profile-card" component={ProfileCard}/>
              <Route path="/faq-accordion" component={FaqAccordian} />
              <Route path="/article-preview" component={ArticlePreview} />
              <Route path='/intro-signup-form' component={IntroSignupForm} />
              <Route exact path="/" component={Home} />
          </Switch>
      </div>
  );
}

export default App;
