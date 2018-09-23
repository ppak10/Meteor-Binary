// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for MongoDB components
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Mongo } from 'meteor/mongo';
// ----------------------------------------------------------------------------

export const Tasks = new Mongo.Collection('tasks');
