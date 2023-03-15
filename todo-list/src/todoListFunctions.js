export function addTodo(todos, newTodo) {
    const newTask = { task: newTodo, completed: false };
    return [...todos, newTask];
  }
  
  export function toggleTodo(todos, index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    return updatedTodos;
  }
  
  export function deleteTodo(todos, index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    return updatedTodos;
  }
  