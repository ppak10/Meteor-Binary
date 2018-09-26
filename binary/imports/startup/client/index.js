// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Client startup script called by client/main.js
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import '../accounts-config.js';
import App from '../../ui/App.js';
import rootReducer from '../../modules/redux/reducers'; // References reducers
// ----------------------------------------------------------------------------

// Store ----------------------------------------------------------------------
const store = createStore(
  rootReducer,  // All reducers
  {},           // Initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// ----------------------------------------------------------------------------

// Meteor Start ---------------------------------------------------------------
Meteor.startup(() => {
  render((
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('render-target'));
});
// ----------------------------------------------------------------------------
