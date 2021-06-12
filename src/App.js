import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, Link} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
