import PropTypes from 'prop-types';
import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = (tasks) => {
  
  const getTaskListJSX = (tasks) => {

    const tasklistData = tasks.TaskListData;
    console.log(tasklistData);
      
      return tasklistData.map((task) => {
        console.log(task);
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              markComplete={tasks.markComplete}
              updateDelete={tasks.updateDelete}
            />
            
        
          );
        });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  TaskListData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  markComplete: PropTypes.func,
  updateDelete: PropTypes.func,
};
export default TaskList;
