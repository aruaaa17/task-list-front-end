import React,{ useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
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
];

const App = () => {
  
  const [tasks, setTasks] = useState(TASKS);




  const markComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
      }
        return {...task};
    });
    setTasks(updatedTasks);
  };
    
  // const markInComplete = (taskId) => {
  //   const updatedTasks = tasks.map(task => {
  //     if(task.id !=== taskId) {
  //       task.isComplete =
  //     }
  //       return {...task};
  //   });
};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{
          <TaskList 
          tasks={TASKS} 
          markComplete={markComplete}
          markInComplete={markInComplete}
          />}</div>
      </main>
    </div>
  );
};

export default App;
