import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';

const App = () => {
  return (
    <div id="todo-app-container">
      <Form />
      <TodoList />
    </div>
  )
}

export default App;
