import React, {Component} from "react";

import './tasks-filter.css'

export default class TaskFilter extends Component {

    static defaultProps = {
        onFilter: () => {},
    }

    state = {
        selectedButton: {
            all: true,
            active: false,
            completed: false,
        }
    }

    onButtonSelect(buttonName) {
        this.props.onFilter(buttonName)
        this.setState({
            selectedButton: {
                all: false,
                active: false,
                completed: false,
                [buttonName]: true,
             }
        })
    }

    render() {
        return (
            <ul className="filters">
                <li>
                    <button className={this.state.selectedButton.all ? 'selected' : ''} onClick={() => {this.onButtonSelect('all')}}>All</button>
                </li>
                <li>
                    <button className={this.state.selectedButton.active ? 'selected' : ''} onClick={() => {this.onButtonSelect('active')}}>Active</button>
                </li>
                <li>
                    <button className={this.state.selectedButton.completed ? 'selected' : ''} onClick={() => {this.onButtonSelect('completed')}}>Completed</button>
                </li>
            </ul>
        )
    }
}
