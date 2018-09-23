// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main Script for client startup
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import '../imports/startup/accounts-config.js';
import { renderRoutes } from '../imports/startup/client/routes.js'
import App from '../imports/ui/App.js';
// ----------------------------------------------------------------------------

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
