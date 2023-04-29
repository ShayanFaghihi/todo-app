import React from "react";

import "./Todo.css";
import { ACTIONS } from "../../../App";

const Todo = (props) => {
  return (
    <li
      className={props.todoObj.completed ? "list-item completed" : "list-item"}
      onClick={() =>
        props.dispatch({
          type: ACTIONS.COMPLETE_TODO,
          payload: { id: props.todoObj.id },
        })
      }
    >
      <span className="todo-checkbox"></span>
      <p className="todo">{props.todoObj.title}</p>
      <span
        className="todo-clear-icon"
        onClick={() =>
          props.dispatch({
            type: ACTIONS.REMOVE_TODO,
            payload: { id: props.todoObj.id },
          })
        }
      >
        <img src="/images/icon-cross.svg" alt="Cross Icon" />
      </span>
    </li>
  );
};

export default Todo;
