import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/HeaderCom';
import './styles/_main.scss';
import './styles/_mision.scss';
import './styles/_profile.scss';
import './styles/_rockets.scss';
import MissionComponent from './components/missionCom';
import ProfileComponent from './components/profileCom';
import RocketComponent from './components/rocketCom';

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
          <ProfileComponent />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
