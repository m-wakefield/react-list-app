import '../App.css';
import React, { useState, useEffect } from 'react';


function ToDoList() {
   const [tasks, setTasks] = useState(() => {
  try {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [
      { id: 1, text: 'Brush teeth', completed: false },
      { id: 2, text: 'Take a shower', completed: false },
      { id: 3, text: 'Walk the dog', completed: false }
    ];
  } catch (e) {
    console.error("Failed to load tasks from localStorage:", e);
    return [];
  }
});


    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]); // 
            setNewTask('');
        }
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function moveTaskUp(id) {
        const index = tasks.findIndex((task) => task.id === id);
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            setTasks(newTasks);
        }
    }

    function moveTaskDown(id) {
        const index = tasks.findIndex((task) => task.id === id);
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
            setTasks(newTasks);
        }
    }
    
    function toggleTaskCompletion(id) {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className="todo-list">
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Find out where all the socks go"
            />
            <button onClick={addTask} className="add-task-button">
                Add Task
            </button>
            <ol>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            className={`text ${task.completed ? 'completed' : ''}`} // 
                            onClick={() => toggleTaskCompletion(task.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => moveTaskUp(task.id)}>↑</button>
                        <button onClick={() => moveTaskDown(task.id)}>↓</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
