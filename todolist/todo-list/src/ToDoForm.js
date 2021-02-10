import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*When we use forms, remember to use e.preventDefault() because we don’t want the default action to 
        take place. In this case, it would reload the page and everything changed will go back to how it initially 
        rendered. */
        addTask(userInput);
        setUserInput('');
    }
    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Task..." />
            <button style={{ margin: '20px' }} onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ToDoForm;