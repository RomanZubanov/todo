import React from 'react';
import PropTypes from 'prop-types';

import TodoCount from '../todo-count';
import TasksFilter from '../tasks-filter';

import './footer.css';

const Footer = ({ onFilter, onClearCompleted, todoCountLeft }) => {
  return (
    <footer className="footer">
      <TodoCount todoCountLeft={todoCountLeft} />
      <TasksFilter onFilter={onFilter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  onFilter: () => {},
  onClearCompleted: () => {},
  todoCountLeft: 0,
};

Footer.propTypes = {
  onFilter: PropTypes.func,
  onClearCompleted: PropTypes.func,
  todoCountLeft: PropTypes.number,
};

export default Footer;
