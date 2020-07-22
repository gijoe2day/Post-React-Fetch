import React, { useState, useEffect } from "react";
import "./App.css";

const Todos = ({ id, title, body }) => {
  return (
    <div className="App container">
      <div className="card">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Todos;
