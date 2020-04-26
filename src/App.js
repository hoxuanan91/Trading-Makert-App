import React from 'react';
import NavBar from './Layout/Header/NavBar';
import Dashboard from './Layout/Components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
      <Router> 
        <div className="App">
          <h1><NavBar /></h1>
          <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />               

              </Switch>
            </div>
            
        </div>
      </Router>
  );
}

export default App;
