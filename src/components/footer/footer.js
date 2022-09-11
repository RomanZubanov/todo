import React from "react";
import TodoCount from "../todo-count";
import TasksFilter from "../tasks-filter";

import './footer.css'

const Footer = ({onFilter, onClearCompleted, todoCountLeft}) => {
    return (
        <footer className="footer">
            <TodoCount todoCountLeft={todoCountLeft}/>
            <TasksFilter onFilter={onFilter}/>
            <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
        </footer>
    )
}

export default Footer