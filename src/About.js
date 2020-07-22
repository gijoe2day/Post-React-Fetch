import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./Todos";

const About = () => {
  useEffect(() => {
    getTodos();
  }, []);

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    setTodos(data);
  };
  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map((todo) => (
        <Todos key={todo.id} title={todo.title} body={todo.body} />
      ))}
    </div>
  );
};

export default About;
