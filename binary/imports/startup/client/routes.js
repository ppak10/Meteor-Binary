// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for routing using React Router
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// ----------------------------------------------------------------------------

// Route Components -----------------------------------------------------------
import App from '../../ui/App.js';
// ----------------------------------------------------------------------------

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </Router>
);
