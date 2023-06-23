import React, { useState } from "react";
import PropTypes from "prop-types";
import './NewTaskForm.css';


const INITIAL_FORM_DATA = {
    id: 0,
    title: '',
    isComplete: false
};

function NewTaskForm(tasks) {
    const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_DATA);
    
    const anInputChanged = (evt) => {
        // console.log(evt);
        if (evt.target.name === 'title' && evt.target.value < 0) {
            return
        }

        const newFormData = {
            ...taskFormData,
            [evt.target.name]: evt.target.value
        };
    
        setTaskFormData(newFormData);  
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        tasks.createNewTask(taskFormData);
        setTaskFormData(INITIAL_FORM_DATA);
    };
    
    return (
        <section className="TaskList">
            <h2>Create New Task</h2>
            <form className="stack" onSubmit={handleFormSubmit}>
                <label htmlFor="taskName">Title:</label>
                <input
                    id="taskName"
                    title="title"
                    type="text"
                    value={ taskFormData.name }
                    onChange={ anInputChanged }
                />
                <label htmlFor="taskCompletion">Complete:</label>
                <input
                    id="taskCompletion"
                    name="isComplete"
                    type="checkbox"
                    value={ taskFormData.isComplete }
                    onChange={ anInputChanged }
                />
                <input type="submit" value="Add new task"></input>
            </form>
        </section>
    );
}


NewTaskForm.propTypes = {
    createNewTask: PropTypes.func.isRequired
};

export default NewTaskForm;