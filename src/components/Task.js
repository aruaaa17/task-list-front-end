import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  
  const [complete, setIsComplete] = useState(props.isComplete);
  
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  
  const updateCompletedTask = () => {
    setIsComplete(!complete);
    props.markComplete(props.id);
    
  };


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={updateCompletedTask}>
      {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>);
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  markComplete: PropTypes.func
  };



export default Task;