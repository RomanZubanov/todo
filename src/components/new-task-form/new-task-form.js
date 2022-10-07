import { useState } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default function NewTaskForm({ onAddItem }) {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (label.trim() === '') {
      alert('Вы ввели пустую строку. Введите хотя бы один символ кроме пробела');
    } else {
      onAddItem(label);
      setLabel('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <input className="new-todo" value={label} onChange={onLabelChange} placeholder="Task" autoFocus />
      <input className="new-todo-form__timer" placeholder="Min" autoFocus />
      <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      <input className="submit-btn-temp" type="submit" value="Submit" />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddItem: () => {},
};

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
};
