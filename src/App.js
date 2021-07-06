import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
// import './App.css';
import Todo from './todo';

const LOCAL_STORAGE_KEY = 'todosApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  React.useEffect(()=> {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedItems) setTodos(storedItems);
  },[])

  React.useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  },[todos]);

  const Toggletodos = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }


  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(previousData => ([
      ...previousData,
      {
        id: uuidv4(),
        name: name,
        complete: false
      }
    ]));

    todoNameRef.current.value = null;
  }

  return (
    <>
      <Todo Todos={todos} toggleTodo={Toggletodos} />
      <input ref={todoNameRef} placeholder="enter todo" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>clear Complete</button>
      <div>{todos.filter(t => !t.complete).length} left to do</div>
    </>
  )
}

export default App;
