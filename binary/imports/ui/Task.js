// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for React Task Component
// ----------------------------------------------------------------------------

import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
