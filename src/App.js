import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';


const App = () => (
  <Router>
    <div className="main_container">
      <ul className="nav-bar">
        <li className="list nav-bar-links">
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
