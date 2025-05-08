import React, {useState} from 'react';
function ToDoList({ todos, onDelete }) {

    const [tasks, settasks] = useState([Brush teeth, Take a shower, Go to the gym]);
    const [newTask, setNewTask] = useState('');

    function handLeInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            settasks([...tasks, { id: Date.now(), text: newTask }]);
            setNewTask('');
        }
    }

    function deleteTask(id) {
        settasks(tasks.filter((task) => task.id !== id));
    }

    function moveTaskUp(id) {
        const index = tasks.findIndex((task) => task.id === id);
        if (index > 0) {
            const newTasks = [...tasks];
            const temp = newTasks[index - 1];
            newTasks[index - 1] = newTasks[index];
            newTasks[index] = temp;
            settasks(newTasks);
        }
    }

    function moveTaskDown(id) {
        const index = tasks.findIndex((task) => task.id === id);
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            const temp = newTasks[index + 1];
            newTasks[index + 1] = newTasks[index];
            newTasks[index] = temp;
            settasks(newTasks);
        }
    }

    


  return (
    <div className='todo-list'>
      <h2>To-Do List</h2>
        <input
            type="text"
            value={newTask}
            onChange={handLeInputChange}
            placeholder="Add a new task"
     
        <button 
            onClick={addTask}
            className="add-task-button"
        </button>
    </div>);
}

ol>
    {tasks.map((task) => (
        <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button onClick={() => moveTaskUp(task.id)}>↑</button>
            <button onClick={() => moveTaskDown(task.id)}>↓</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    ))}
        </ol>
        <button onClick={addTask} className="add-task-button">Add Task</button>
        <button onClick={deleteTask} className="delete-task-button">Delete Task</button>
        
</ol>
export default ToDoList;

