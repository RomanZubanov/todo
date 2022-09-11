import React from "react";

import './todo-count.css'

const TodoCount = ({todoCountLeft}) => {

    const countItemLeft = (count) => {
        if (count < 2) return `${todoCountLeft} item left`;
        return `${todoCountLeft} items left`
    }

    return <span className="todo-count">{countItemLeft(todoCountLeft)}</span>
}

export default TodoCount