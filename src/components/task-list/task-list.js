import React from "react";
import Task from "../task";

import './task-list.css'

const TaskList = ({todos} ) => {

    const elements = todos.map((item) => {

        const { label, timeTaskCreation, completedTask = false, editingTask = false, id } = item

        let classTask = ''
        let inputEditingTask = null

        if (completedTask) {
            classTask = 'completed'
        }

        if (editingTask) {
            classTask = 'editing'
            inputEditingTask = <input type="text" className="edit" value="Editing task" />
        }

        return (
            <li key={ id } className={classTask}>
                <Task label={ label } timeTaskCreation={ timeTaskCreation } />
                { inputEditingTask }
            </li>
        )
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    )
};

export default TaskList;