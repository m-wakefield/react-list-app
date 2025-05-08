import React, {useState} from 'react';
function ToDoList({ todos, onDelete }) {

    const [tasks, settasks] = useState([]);
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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;

