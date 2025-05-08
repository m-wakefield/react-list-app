import './App.css'; 

import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Brush teeth' },
        { id: 2, text: 'Take a shower' },
        { id: 3, text: 'Go to the gym' }
    ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask }]);
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

    return (
        <div className="todo-list">
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button onClick={addTask} className="add-task-button">
                Add Task
            </button>
            <ol>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span className="text">{task.text}</span>
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
