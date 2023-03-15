import React, { useState } from 'react';
import './Todolist.css'
import { addTodo, toggleTodo, deleteTodo } from './todoListFunctions';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos(addTodo(todos, newTodo.trim()));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(toggleTodo(todos, index));
  };

  const handleDeleteTodo = (index) => {
    setTodos(deleteTodo(todos, index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Add a new task" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
