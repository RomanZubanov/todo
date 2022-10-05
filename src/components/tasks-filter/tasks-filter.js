import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default class TaskFilter extends Component {
  static defaultProps = {
    onFilter: () => {},
  };

  static propTypes = {
    onFilter: PropTypes.func,
  };

  state = {
    selectedButton: {
      all: true,
      active: false,
      completed: false,
    },
  };

  onButtonSelect(buttonName) {
    this.props.onFilter(buttonName);
    this.setState({
      selectedButton: {
        all: false,
        active: false,
        completed: false,
        [buttonName]: true,
      },
    });
  }

  render() {
    return (
      <div className="filters">
        <label className={this.state.selectedButton.all ? 'selected' : ''}>
          <input
            type="radio"
            name="filter"
            onClick={() => {
              this.onButtonSelect('all');
            }}
          />
          All
        </label>
        <label className={this.state.selectedButton.active ? 'selected' : ''}>
          <input
            type="radio"
            name="filter"
            onClick={() => {
              this.onButtonSelect('active');
            }}
          />
          Active
        </label>
        <label className={this.state.selectedButton.completed ? 'selected' : ''}>
          <input
            type="radio"
            name="filter"
            onClick={() => {
              this.onButtonSelect('completed');
            }}
          />
          Completed
        </label>
      </div>
    );
  }
}
