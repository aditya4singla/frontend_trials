import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    return (
        <div id={todo.id} onClick={handleToggle.bind(null, todo.id)} className = {todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
};

export default ToDo;