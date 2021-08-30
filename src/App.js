import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/header';
import MissionComponent from './components/mission';
import RocketComponent from './components/rocket';

const App = () => (
  <Router>
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/rocket" />
        </Route>
        <Route path="/rocket">
          <RocketComponent />
        </Route>
        <Route path="/mission">
          <MissionComponent />
        </Route>
        <Route path="/profile">
          Profile
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
