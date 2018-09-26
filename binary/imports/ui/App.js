// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main script for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'; // work to outsource
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
// ----------------------------------------------------------------------------

// React App Component --------------------------------------------------------
// App component that represents the whole app
class App extends Component {

  // Class Constructor --------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      hideCompleted: false,
    };
  }

  componentDidMount() {
    const { handleOnLogin } = this.props; // Creates handleOnLogin prop
    Accounts.onLogin(() => handleOnLogin());
    this.setPageReady();
  }

  setPageReady() {
    this.setState({ ready: true });
  }

  // Form Submition
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  // Render Component ---------------------------------------------------------
  render() {
    const { props, state } = this;
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed m-2">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

          { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form> : ''
          }

        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Props ----------------------------------------------------------------------
App.propTypes = {
  handleOnLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  handleOnLogin: data => dispatch(onLogin(data))
});
// ----------------------------------------------------------------------------

// Export App -----------------------------------------------------------------
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTracker(() => {
    Meteor.subscribe('tasks');

    return {
      tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
      incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
      currentUser: Meteor.user(),
    };
  })
)(App);
// ----------------------------------------------------------------------------
