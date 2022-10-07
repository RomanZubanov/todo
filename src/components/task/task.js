import PropTypes from 'prop-types';

import TaskTimer from '../task-timer';
import TimeCreation from '../time-creation';

import './task.css';

export default function Task({
  label,
  timeTaskCreation,
  completedTask,
  onCompleted,
  onDeleted,
  onEdited,
  onTimerStart,
  onTimerPause,
  id,
  timer,
}) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completedTask} onChange={onCompleted} />
      <div className="task-info">
        <span className="title">{label}</span>
        <TaskTimer onTimerStart={onTimerStart} onTimerPause={onTimerPause} id={id} timer={timer} />
        <TimeCreation timeTaskCreation={timeTaskCreation} />
      </div>
      <button className="icon icon-edit" onClick={onEdited} />
      <button className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}

Task.defaultProps = {
  label: '',
  timeTaskCreation: new Date(),
  completedTask: false,
  onCompleted: () => {},
  onDeleted: () => {},
  onEdited: () => {},
  onTimerStart: () => {},
  onTimerPause: () => {},
  id: 0,
  timer: {},
};

Task.propTypes = {
  label: PropTypes.string,
  timeTaskCreation: PropTypes.object,
  completedTask: PropTypes.bool,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdited: PropTypes.func,
  onTimerStart: PropTypes.func,
  onTimerPause: PropTypes.func,
  id: PropTypes.number,
  timer: PropTypes.object,
};
