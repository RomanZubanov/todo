import React, { Component } from 'react';
import './time-creation.css';
import { formatDistanceToNow } from 'date-fns';

export default class TimeCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeCreation: formatDistanceToNow(props.timeTaskCreation, { includeSeconds: true }),
    };
  }

  componentDidMount() {
    const { timeTaskCreation } = this.props;
    this.timerID = setInterval(() => {
      this.setState({
        timeCreation: formatDistanceToNow(timeTaskCreation, { includeSeconds: true }),
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { timeCreation } = this.state;
    return <span className="description">{`Created ${timeCreation} ago`}</span>;
  }
}
