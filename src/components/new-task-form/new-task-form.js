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
    console.log(event.target.value);
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
      <form onSubmit={this.onAddItem} className="new-todo-form">
        <input
          className="new-todo"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="Task"
          autoFocus
        />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        <input className="submit-btn-temp" type="submit" value="Submit" />
      </form>
    );
  }
}
