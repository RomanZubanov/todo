import React, { Component } from 'react';

import convertTimestampToTimer from '../../services/convertTimestampToTimer';

import './task-timer.css';

export default class TaskTimer extends Component {
  state = {
    timerTick: null,
  };

  componentDidMount() {
    if (this.props.timer.activated && !this.props.timer.working) {
      this.setState({
        timerTick: convertTimestampToTimer(
          this.props.timer.timeStart,
          this.props.timer.timePause,
          this.props.timer.pauseSum
        ),
      });
    } else if (this.props.timer.activated && this.props.timer.working) {
      this.setState({
        timerTick: convertTimestampToTimer(this.props.timer.timeStart, new Date().getTime(), this.props.timer.pauseSum),
      });
      this.interval = setInterval(() => {
        if (this.props.timer.working) {
          this.setState({
            timerTick: convertTimestampToTimer(
              this.props.timer.timeStart,
              new Date().getTime(),
              this.props.timer.pauseSum
            ),
          });
        }
      }, 1000);
    } else {
      this.setState({
        timerTick: '00 : 00',
      });
    }
  }

  onTimerStart = () => {
    this.props.onTimerStart(this.props.id, new Date().getTime());
    this.interval = setInterval(() => {
      if (this.props.timer.working) {
        this.setState({
          timerTick: convertTimestampToTimer(
            this.props.timer.timeStart,
            new Date().getTime(),
            this.props.timer.pauseSum
          ),
        });
      }
    }, 1000);
  };

  onTimerPause = () => {
    this.props.onTimerPause(this.props.id, new Date().getTime());
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
