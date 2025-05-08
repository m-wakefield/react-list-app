import React, {useState} from 'react';
function ToDoList({ todos, onDelete }) {

    const [tasks, settasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            settasks([...tasks, { id: Date.now(), text: newTask }]);
            setNewTask('');
        }
    }
  return (
    <div>
      <h2>To-Do List</h2>
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

