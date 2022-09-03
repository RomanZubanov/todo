import React from "react";
import TodoCount from "../todo-count";
import TasksFilter from "../tasks-filter";

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <TodoCount/>
            <TasksFilter/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer