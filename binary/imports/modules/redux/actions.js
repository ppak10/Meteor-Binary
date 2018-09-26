// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Actions script to hold redux actions
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Meteor } from 'meteor/meteor';
// ----------------------------------------------------------------------------

export function onLogin(){
  return (dispatch) => {

    dispatch({
      type: 'ON_LOGIN'
    });
  };
}

export function onLogout(){
  return (dispatch) => {

    dispatch({
      type: 'ON_LOGOUT'
    });
  };
}
