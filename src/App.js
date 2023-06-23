import React,{ useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import axios from 'axios';

// const TaskListData = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
//   {
//     id: 3,
//     title: 'Wash the Dishes',
//     isComplete: false,
//   },
//   {
//     id: 4,
//     title: 'Do Laundry',
//     isComplete: true,
//   },
// ];

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  
  const loadTasks = () => {
    axios.get('https://task-list-api-c17.onrender.com/tasks')
    .then((response) => {
      const initialTaskData = [];
      response.data.forEach((task) => {
        initialTaskData.push(task);
      });
      setTasks(initialTaskData);
    })
    .catch((error) => {
      console.log('error', error);
    });
  };

  useEffect ( () => {
    loadTasks();
  }, []);

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
    axios.delete(`https://task-list-api-c17.onrender.com/tasks/${taskId}`)
      .then((response) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id !== taskId) {
            return { ...task };
          }
        });

        const filteredUpdatedData = updatedTasks.filter(function (element) {
          return element !== undefined;
        });
        setTasks(filteredUpdatedData);
      })
      .catch((error) => {
        console.log('could not delete task', error, error.response);
      });
      // const newTasks = [];
      // for (let task of tasks) {
      //   if (task.id !== taskId) {
      //     newTasks.push(task);
      //   }
    };
    // setTasks(newTasks);
  // };
  const createNewTask = (newTaskInfo) => {
    const updateNewTaskInfo = {
      ...newTaskInfo,
      'task_id': null
    };
    
    axios
      .post('https://task-list-api-c17.onrender.com/tasks', updateNewTaskInfo)
      .then(() => {
        const newTasksArray = [...tasks];
        newTasksArray.push(newTaskInfo);
        setTasks(newTasksArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <NewTaskForm createNewTask={createNewTask} />
          <TaskList 
            TaskListData={tasks} 
            markComplete={markComplete}
            updateDelete={updateDelete}
          /></div>
      </main>
    </div>
  );
};
export default App;
