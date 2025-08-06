import { useState } from 'react';
import TaskForm from './components/TaskForm';
import './App.css'

function App() {
  const [tasks, setTasks] = useState(0)

  const handleTaskCreated = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };
  return (
    <>
      <div className="app-container">
        <h1>NeuroFlux</h1>
        <TaskForm onTaskCreated={handleTaskCreated} />
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default App
