import React from "react";

import "./Status.css";
import { ACTIONS } from "../../App";
import { useState } from "react";

const Status = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const clearCompletedHandler = () => {
    const completedTodosLength = props.todoList.filter(
      (todo) => todo.completed
    ).length;
    if (completedTodosLength > 0) {
      setShowTooltip(false);
      props.dispatch({ type: ACTIONS.CLEAR_COMPLETED });
    } else {
      setShowTooltip(true);
    }
  };
  return (
    <li className="todos-status-item">
      <span>
        {props.todoList.filter((todo) => !todo.completed).length} items left
      </span>
      <span
        className={
          !showTooltip
            ? "todos-status-clearAll"
            : "todos-status-clearAll disabled"
        }
        onClick={clearCompletedHandler}
      >
        Clear Completed
        <span className={!showTooltip ? "tooltip" : "tooltip show"}>
          There are no completed todos to be cleared!
        </span>
      </span>
    </li>
  );
};

export default Status;
