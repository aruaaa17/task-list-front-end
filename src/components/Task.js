import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import './Task.css';

const Task = (tasks)=> {
  
  const [complete, setIsComplete] = useState(tasks.isComplete);
  
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  
  const updateCompletedTask = () => {
    setIsComplete(!complete);
    tasks.markComplete(tasks.id);
    
  };
  
  const removeTask = () => {
    tasks.updateDelete(tasks.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={updateCompletedTask}>
      {tasks.title}
      </button>
      <button className="tasks__item__remove button" onClick={removeTask}>x</button>
    </li>);
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  markComplete: PropTypes.func,
  updateDelete: PropTypes.func
};



export default Task;