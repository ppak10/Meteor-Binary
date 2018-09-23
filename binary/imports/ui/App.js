// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main script for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
// ----------------------------------------------------------------------------

// App component - represents the whole app
class App extends Component {

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// App component default export
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
