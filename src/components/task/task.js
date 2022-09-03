import React from "react";

const Task = ( { label, timeTaskCreation } ) => {

    return (
        <div className='view'>
            <input className="toggle" type="checkbox" />
            <label>
                <span className="description">{ label }</span>
                <span className="created">{ timeTaskCreation }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
};

export default Task;