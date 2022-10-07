import PropTypes from 'prop-types';

import './todo-count.css';

function TodoCount({ todoCountLeft }) {
  const countItemLeft = (count) => {
    if (count < 2) return `${todoCountLeft} item left`;
    return `${todoCountLeft} items left`;
  };

  return <span className="todo-count">{countItemLeft(todoCountLeft)}</span>;
}

TodoCount.defaultProps = {
  todoCountLeft: 0,
};

TodoCount.propTypes = {
  todoCountLeft: PropTypes.number,
};

export default TodoCount;
