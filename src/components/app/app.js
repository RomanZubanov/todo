import React from "react";
import { formatDistanceToNow } from 'date-fns'

import Header from '../header'
import TaskList from "../task-list";
import Footer from "../footer";

import './app.css'

const App = () => {

    let timeTaskCreation = formatDistanceToNow(new Date());

    const todoData = [
        {label: 'Completed task', timeTaskCreation, completedTask: true, editingTask: false, id: 1},
        {label: 'Editing task', timeTaskCreation, completedTask: false, editingTask: true, id: 2},
        {label: 'Active task Done', timeTaskCreation, completedTask: false, editingTask: false, id: 3},
    ]

    return (
        <section className='todoapp'>
            <Header />
            <section className='main'>
                <TaskList todos={ todoData } />
                <Footer/>
            </section>

        </section>
    )
}

export default App