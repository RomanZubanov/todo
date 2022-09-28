import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskTimer from '../task-timer';
import TimeCreation from '../time-creation';

import './task.css';

export default class Task extends Component {
  static defaultProps = {
    label: '',
    timeTaskCreation: new Date(),
    completedTask: false,
    onCompleted: () => {},
    onDeleted: () => {},
    onEdited: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    timeTaskCreation: PropTypes.object,
    completedTask: PropTypes.bool,
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdited: PropTypes.func,
  };

  render() {
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.completedTask}
          onChange={this.props.onCompleted}
        />
        <label>
          <span className="title">{this.props.label}</span>
          <TaskTimer
            onTimerStart={this.props.onTimerStart}
            onTimerPause={this.props.onTimerPause}
            idx={this.props.idx}
            timer={this.props.timer}
          />
          <TimeCreation timeTaskCreation={this.props.timeTaskCreation} />
        </label>
        <button className="icon icon-edit" onClick={this.props.onEdited} />
        <button className="icon icon-destroy" onClick={this.props.onDeleted} />
      </div>
    );
  }
}
