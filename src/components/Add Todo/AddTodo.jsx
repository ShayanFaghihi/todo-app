import React, { useState, useRef } from "react";

import "./AddTodo.css";
import { ACTIONS } from "../../App";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length > 0) {
      props.dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { id: Date.now(), title: todo, completed: false },
      });
      setTodo("");
      inputRef.current.value = "";
    } else {
      alert("Write something as a Todo");
    }
  };
  return (
    <form className="form" onSubmit={addTodoHandler}>
      <input
        ref={inputRef}
        type="text"
        name="todo-input"
        id="todo-input"
        placeholder="Create a new todo..."
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
