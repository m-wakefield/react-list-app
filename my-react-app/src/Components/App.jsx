import { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';

function App() {
 const defaultTasks = [
  { text: 'Buy groceries', completed: false },
  { text: 'Finish React project', completed: false },
  { text: 'Call mom', completed: false }
];

const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : defaultTasks;
});


  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      text: newTask.trim(),
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

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index - 1];
    updatedTasks[index - 1] = updatedTasks[index];
    updatedTasks[index] = temp;
    setTasks(updatedTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index + 1];
    updatedTasks[index + 1] = updatedTasks[index];
    updatedTasks[index] = temp;
    setTasks(updatedTasks);
    useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
  };

  return (
    <>
      <Navbar />
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
              <span>{task.text}</span>
              <div className="task-actions">
                <button onClick={(e) => { e.stopPropagation(); moveTaskUp(index); }}>🔼</button>
                <button onClick={(e) => { e.stopPropagation(); moveTaskDown(index); }}>🔽</button>
                <button className="delete-btn" onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTask(index);
                }}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
