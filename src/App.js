import "./App.css";
import React, { useState } from "react";
import Form from "./components/form";
import TodoList from "./components/todolist";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <div className="App">
          <h1>John's To Do List</h1>
        </div>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
