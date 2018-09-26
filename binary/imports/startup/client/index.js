// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Client startup script called by client/main.js
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import '../accounts-config.js';
import App from '../../ui/App.js';
// ----------------------------------------------------------------------------

Meteor.startup(() => {
  render((
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  ), document.getElementById('render-target'));
});
