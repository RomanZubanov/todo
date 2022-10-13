import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import convertTimestampToTimer from '../../helpers/convertTimestampToTimer';

import './task-timer.css';

export default function TaskTimer({ onTimerStart, onTimerPause, onTimerEnd, id, timer }) {
  const { timeLeft, timeStart, pauseSum, working, activated, ended } = timer;

  const [timerTick, setTimerTick] = useState(convertTimestampToTimer(0, 0, 0, timeLeft));

  useEffect(() => {
    if (activated && working && !ended) {
      setTimerTick(convertTimestampToTimer(timeStart, new Date().getTime(), pauseSum, timeLeft));
    } else if (activated && !working && !ended) {
      setTimerTick(convertTimestampToTimer(timeStart, timer.timePause, pauseSum, timeLeft));
    } else if (ended) {
      setTimerTick('end');
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (working && !ended) {
      intervalId = setInterval(() => {
        setTimerTick(convertTimestampToTimer(timeStart, new Date().getTime(), pauseSum, timeLeft));
        console.log('tick ', intervalId);
      }, 1000);
    } else {
      console.log('working ', working, 'ended ', ended, 'interval ', intervalId);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [working, ended]);

  useEffect(() => {
    if (timerTick === 'end') {
      onTimerEnd(id);
    }
  }, [timerTick]);

  const clickTimerStart = () => {
    onTimerStart(id, new Date().getTime());
  };

  const clickTimerPause = () => {
    onTimerPause(id, new Date().getTime());
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
  onTimerStart: PropTypes.func,
  onTimerPause: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  timer: PropTypes.object,
};
