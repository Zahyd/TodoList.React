import React from 'react';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.task}</span>
          <button onClick={() => props.onToggleTodo(index)}>Complete</button>
          <button onClick={() => props.onDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

