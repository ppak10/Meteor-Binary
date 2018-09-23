// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for accounts UI to use usernames instead of emails
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Accounts } from 'meteor/accounts-base';
// ----------------------------------------------------------------------------

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
