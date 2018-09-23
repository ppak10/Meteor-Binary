// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main script for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
// ----------------------------------------------------------------------------

// React App Component --------------------------------------------------------
// App that represents the whole app
class App extends Component {

  // Form Submition
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  // Render Component ---------------------------------------------------------
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Export Component -----------------------------------------------------------
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);
// ----------------------------------------------------------------------------
