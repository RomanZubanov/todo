import React, {Component} from "react";
import Task from "../task";
import InputEditingTask from "../input-editing-task";

import './task-list.css'

export default class TaskList extends Component {

    createElements = () => {
        return (this.props.todos.map((item) =>{

        let classTask = '';
        let inputEditingTask = null

        if (item.completedTask) {
            classTask = 'completed'
        }

        if (item.editingTask) {
            classTask = 'editing'
            inputEditingTask = <InputEditingTask value={item.label} id={item.id} onSubmitEditing={this.props.onSubmitEditing}/>
        }

        return (
            <li key={ item.id } className={classTask}>
                <Task
                    label={item.label}
                    timeTaskCreation={ item.timeTaskCreation }
                    completedTask={item.completedTask}
                    onCompleted={() => this.props.onCompleted(item.id)}
                    onDeleted={() => this.props.onDeleted(item.id)}
                    onEdited={() => this.props.onEdited(item.id)}
                />
                { inputEditingTask }
            </li>
        )
        }))
    }

    render() {
        return (
            <ul className='todo-list'>
                { this.createElements() }
            </ul>
        )
    }
}