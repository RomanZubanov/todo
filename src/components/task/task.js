import React from "react";

const Task = ( { label, timeTaskCreation, completedTask, onCompleted, onDeleted, onEdited } ) => {

    return (
        <div className='view'>
            <input className="toggle" type="checkbox" checked={completedTask} onChange={onCompleted}/>
            <label>
                <span className="description">{ label }</span>
                <span className="created">{ timeTaskCreation }</span>
            </label>
            <button className="icon icon-edit" onClick={onEdited}></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
    )
};

export default Task;