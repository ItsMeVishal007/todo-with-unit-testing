import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const Todo = ({ Todos, toggleTodo }) => {
  return (
    Todos.map(d => (
      <TodoList todo={d} key={d.id} toggleTodo={toggleTodo} />
    ))
  )
}

export default Todo;
