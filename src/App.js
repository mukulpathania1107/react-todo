import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList status={status} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
