import { useState } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default function NewTaskForm({ onAddItem }) {
  const [label, setLabel] = useState('');
  const [timeLeft, setTimeLeft] = useState({ min: '', sec: '' });

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onTimeMinChange = (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      alert('Введите число');
      return;
    }
    setTimeLeft((timeLeft) => ({ ...timeLeft, min: event.target.value }));
  };

  const onTimeSecChange = (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      alert('Введите число');
      return;
    }
    setTimeLeft((timeLeft) => ({ ...timeLeft, sec: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (label.trim() === '') {
      alert('Вы ввели пустую строку. Введите хотя бы один символ кроме пробела');
    } else {
      const timeLeftInSec = Number(timeLeft.min) * 60 + Number(timeLeft.sec);
      onAddItem(label, timeLeftInSec);
      setLabel('');
      setTimeLeft({ min: '', sec: '' });
    }
  };

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <input className="new-todo" value={label} onChange={onLabelChange} placeholder="Task" autoFocus />
      <input
        className="new-todo-form__timer"
        value={timeLeft.min}
        onChange={onTimeMinChange}
        placeholder="Min"
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        value={timeLeft.sec}
        onChange={onTimeSecChange}
        placeholder="Sec"
        autoFocus
      />
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
