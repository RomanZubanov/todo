import { useState } from 'react';
import './input-editing-task.css';
import PropTypes from 'prop-types';

export default function InputEditingTask({ value, id, onSubmitEditing }) {
  const [inputText, setInputText] = useState(value);

  const editInputText = (event) => {
    setInputText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === '') {
      alert('Вы ввели пустую строку. Введите хотя бы один символ кроме пробела');
    } else {
      onSubmitEditing(id, inputText);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" className="edit" value={inputText} onChange={editInputText} />
    </form>
  );
}

InputEditingTask.defaultProps = {
  value: '',
};

InputEditingTask.propTypes = {
  value: PropTypes.string,
};
