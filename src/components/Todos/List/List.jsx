import React from "react";

import Todo from "../Todo/Todo";
import Status from "../../Status/Status";
import "./List.css";

const List = (props) => {
  let todoList = props.todoList;
  if (props.filterOption === "active") {
    todoList = props.todoList.filter((todo) => !todo.completed);
  } else if (props.filterOption === "completed") {
    todoList = props.todoList.filter((todo) => todo.completed);
  } 
  return (
    <div className="todos-list">
      <ul className="list">
        {todoList.map((todo) => (
          <Todo key={todo.id} todoObj={todo} dispatch={props.dispatch} />
        ))}
        <Status todoList={props.todoList} dispatch={props.dispatch} />
      </ul>
    </div>
  );
};

export default List;
