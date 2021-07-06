import React from 'react'

const TodoList = ({ todo, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <label>
      <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      {todo.name}
      <br />
    </label>
  )
}

export default TodoList;
