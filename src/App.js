import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Player from './Player/Player';
import SideBar from './SideBar';
import Team from './Team';
import './App.css';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page">
          <SideBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/player" component={Player} />
              <Route exact path="/team" component={Team} />
              <Router
                render={() => {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
