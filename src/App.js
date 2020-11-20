import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
