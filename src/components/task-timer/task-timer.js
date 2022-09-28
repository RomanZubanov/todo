import React, { Component } from 'react';

import timer from '../../services/timer';

import './task-timer.css';

export default class TaskTimer extends Component {
  state = {
    timerTick: '00 : 00',
  };

  onTimerStart = () => {
    this.props.onTimerStart(this.props.idx, new Date().getTime());
    this.interval = setInterval(() => {
      if (this.props.timer.working) {
        this.setState({
          timerTick: timer(this.props.timer.timeStart, new Date().getTime(), this.props.timer.pauseSum),
        });
      }
    }, 1000);
  };

  onTimerPause = () => {
    this.props.onTimerPause(this.props.idx, new Date().getTime());
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onTimerStart} />
        <button className="icon icon-pause" onClick={this.onTimerPause} />
        <span className="time">{this.state.timerTick}</span>
      </span>
    );
  }
}
