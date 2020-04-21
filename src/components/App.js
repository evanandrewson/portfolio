import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
