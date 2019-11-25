import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>
  );
};

export default App;
