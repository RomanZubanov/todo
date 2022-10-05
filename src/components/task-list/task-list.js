import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import InputEditingTask from '../input-editing-task';

import './task-list.css';

export default class TaskList extends Component {
  static defaultProps = {
    todos: [{ label: 'label', timeTaskCreation: new Date(), completedTask: false, editingTask: false, id: 0 }],
    onCompleted: () => {},
    onDeleted: () => {},
    onEdited: () => {},
    onSubmitEditing: () => {},
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdited: PropTypes.func,
    onSubmitEditing: PropTypes.func,
  };

  createElements = () =>
    this.props.todos.map((item) => {
      let classTask = '';
      let inputEditingTask = null;

      if (item.completedTask) {
        classTask = 'completed';
      }

      if (item.editingTask) {
        classTask = 'editing';
        inputEditingTask = (
          <InputEditingTask value={item.label} id={item.id} onSubmitEditing={this.props.onSubmitEditing} />
        );
      }

      return (
        <li key={item.id} className={classTask}>
          <Task
            id={item.id}
            timer={item.timer}
            onTimerStart={this.props.onTimerStart}
            onTimerPause={this.props.onTimerPause}
            label={item.label}
            completedTask={item.completedTask}
            onCompleted={() => this.props.onCompleted(item.id)}
            onDeleted={() => this.props.onDeleted(item.id)}
            onEdited={() => this.props.onEdited(item.id)}
          />
          {inputEditingTask}
        </li>
      );
    });

  render() {
    return <ul className="todo-list">{this.createElements()}</ul>;
  }
}
