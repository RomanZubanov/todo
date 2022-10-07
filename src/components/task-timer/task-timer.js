import { useState, useEffect } from 'react';
import PropsType from 'prop-types';

import convertTimestampToTimer from '../../services/convertTimestampToTimer';

import './task-timer.css';

export default function TaskTimer({ onTimerStart, onTimerPause, id, timer }) {
  const [timerTick, setTimerTick] = useState('00 : 00');
  const [working, setWorking] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timer.activated && !timer.working) {
      setTimerTick(convertTimestampToTimer(timer.timeStart, timer.timePause, timer.pauseSum));
    } else if (timer.working) {
      setTimerTick(convertTimestampToTimer(timer.timeStart, new Date().getTime(), timer.pauseSum));
      intervalId = setInterval(() => {
        setTimerTick(convertTimestampToTimer(timer.timeStart, new Date().getTime(), timer.pauseSum));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [working, timerTick]);

  const clickTimerStart = () => {
    onTimerStart(id, new Date().getTime());
    setWorking(true);
  };

  const clickTimerPause = () => {
    onTimerPause(id, new Date().getTime());
    setWorking(false);
  };

  return (
    <span className="description">
      <button className="icon icon-play" onClick={clickTimerStart} />
      <button className="icon icon-pause" onClick={clickTimerPause} />
      <span className="time">{timerTick}</span>
    </span>
  );
}

TaskTimer.defaultProps = {
  onTimerStart: () => {},
  onTimerPause: () => {},
  id: 0,
  timer: {},
};

TaskTimer.propTypes = {
  onTimerStart: PropsType.func,
  onTimerPause: PropsType.func,
  id: PropsType.number,
  timer: PropsType.object,
};
