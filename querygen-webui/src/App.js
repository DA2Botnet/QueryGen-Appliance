import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Queries } from './Queries'
import { Settings } from './Settings'
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
          <Route path="/queries" component={Queries} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
