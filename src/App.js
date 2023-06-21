import React,{ useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TaskListData = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Wash the Dishes',
    isComplete: false,
  },
  {
    id: 4,
    title: 'Do Laundry',
    isComplete: true,
  },
];

const App = () => {
  
  const [tasks, setTasks] = useState(TaskListData);


  const markComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        
      
        return {
          ...task,
          isComplete: !task.isComplete
        };
      }
    return task;
    });
    
    setTasks(updatedTasks);
  };
    
  const updateDelete = (taskId) => {
    const newTasks = [];
    for (let task of tasks) {
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    setTasks(newTasks);
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1>Ada&apos;s Task List</h1>
        </header>
        <main>
          <div>{
            <TaskList 
              TaskListData={tasks} 
              markComplete={markComplete}
              updateDelete={updateDelete}
            />}</div>
        </main>
      </div>
    );
  };
export default App;
