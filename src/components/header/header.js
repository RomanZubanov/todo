import React from 'react';
import NewTaskForm from "../new-task-form";

import './header.css'

const Header = () => {
    return (
        <header>
           <h1>todos</h1>
            <NewTaskForm />
        </header>
    )
}

export default Header