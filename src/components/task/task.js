import React, {Component} from "react";
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {

    static defaultProps = {
        label: '',
        timeTaskCreation: (new Date()),
        completedTask: false,
        onCompleted: () => {},
        onDeleted: () => {},
        onEdited: () => {},
    }

    state = {
        timeCreation: formatDistanceToNow(this.props.timeTaskCreation, {includeSeconds: true})
    }

    componentDidMount() {
        this.timerID = setInterval(() => {this.setState({
            timeCreation: formatDistanceToNow(this.props.timeTaskCreation, {includeSeconds: true})
        })}, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className='view'>
                <input className="toggle" type="checkbox" checked={this.props.completedTask} onChange={this.props.onCompleted}/>
                <label>
                    <span className="description">{ this.props.label }</span>
                    <span className="created">{ `Created ${this.state.timeCreation} ago` }</span>
                </label>
                <button className="icon icon-edit" onClick={this.props.onEdited}></button>
                <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
            </div>
        )
    }
}


