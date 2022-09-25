import React, { Component } from 'react';
import './time-creation.css';
import { formatDistanceToNow } from 'date-fns';

export default class TimeCreation extends Component {
  state = {
    timeCreation: formatDistanceToNow(this.props.timeTaskCreation, { includeSeconds: true }),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        timeCreation: formatDistanceToNow(this.props.timeTaskCreation, { includeSeconds: true }),
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <span className="description">{`Created ${this.state.timeCreation} ago`}</span>;
  }
}
