import React, { Component } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAddItem: () => {},
  };

  static propTypes = {
    onAddItem: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onAddItem = (event) => {
    event.preventDefault();
    if (this.state.label.trim() === '') {
      alert('Вы ввели пустую строку. Введите хотя бы один символ кроме пробела');
    } else {
      this.props.onAddItem(this.state.label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onAddItem}>
        <input
          className="new-todo"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    );
  }
}
