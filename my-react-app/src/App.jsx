import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      text: newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>✅ To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleToggleTask(index)}
          >
            {task.text}
            <button className="delete-btn" onClick={(e) => {
              e.stopPropagation(); // prevent toggle when deleting
              handleDeleteTask(index);
            }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
