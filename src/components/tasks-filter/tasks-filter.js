import { useState } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default function TasksFilter({ onFilter }) {
  const [selectedButton, setSelectedButton] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const onButtonSelect = (buttonName) => {
    onFilter(buttonName);
    setSelectedButton({
      all: false,
      active: false,
      completed: false,
      [buttonName]: true,
    });
  };

  return (
    <div className="filters">
      <label className={selectedButton.all ? 'selected' : ''}>
        <input
          type="radio"
          name="filter"
          onClick={() => {
            onButtonSelect('all');
          }}
        />
        All
      </label>
      <label className={selectedButton.active ? 'selected' : ''}>
        <input
          type="radio"
          name="filter"
          onClick={() => {
            onButtonSelect('active');
          }}
        />
        Active
      </label>
      <label className={selectedButton.completed ? 'selected' : ''}>
        <input
          type="radio"
          name="filter"
          onClick={() => {
            onButtonSelect('completed');
          }}
        />
        Completed
      </label>
    </div>
  );
}

TasksFilter.defaultProps = {
  onFilter: () => {},
};

TasksFilter.propTypes = {
  onFilter: PropTypes.func,
};
