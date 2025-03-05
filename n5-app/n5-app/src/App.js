import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Function to add a new task
  const addTodo = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID
        text: text,
      };
      //makes the text area blank
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  //function ToggleTodo
  const togTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // funcction to remove task
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span>{todo.text}</span>
            <button className="tog-btn" onClick={() => togTodo(todo.id)}>
              Done
            </button>
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
