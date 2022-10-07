import PropTypes from 'prop-types';

import Task from '../task';
import InputEditingTask from '../input-editing-task';

import './task-list.css';

export default function TaskList({
  todos,
  onSubmitEditing,
  onTimerStart,
  onTimerPause,
  onCompleted,
  onDeleted,
  onEdited,
}) {
  const createElements = () =>
    todos.map((item) => {
      let classTask = '';
      let inputEditingTask = null;

      if (item.completedTask) {
        classTask = 'completed';
      }

      if (item.editingTask) {
        classTask = 'editing';
        inputEditingTask = <InputEditingTask value={item.label} id={item.id} onSubmitEditing={onSubmitEditing} />;
      }

      return (
        <li key={item.id} className={classTask}>
          <Task
            id={item.id}
            timer={item.timer}
            onTimerStart={onTimerStart}
            onTimerPause={onTimerPause}
            label={item.label}
            completedTask={item.completedTask}
            onCompleted={() => onCompleted(item.id)}
            onDeleted={() => onDeleted(item.id)}
            onEdited={() => onEdited(item.id)}
          />
          {inputEditingTask}
        </li>
      );
    });

  return <ul className="todo-list">{createElements()}</ul>;
}

TaskList.defaultProps = {
  todos: [{ label: 'label', timeTaskCreation: new Date(), completedTask: false, editingTask: false, id: 0 }],
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
  onSubmitEditing: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdited: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};
