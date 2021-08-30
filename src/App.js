import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <Router>
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/rocket" />
          <Redirect to="/mission" />
          <Redirect to="/profile" />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
