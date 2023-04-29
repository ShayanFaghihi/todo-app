import React, { useState, useReducer, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import AddTodo from "./components/Add Todo/AddTodo";
import Filter from "./components/Filter/Filter";
import List from "./components/Todos/List/List";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  GET_LOCAL_DATA: "get-localstorage-todos",
  COMPLETE_TODO: "complete-todo",
  CLEAR_COMPLETED: "clear-completed-todos",
  SHOW_ACTIVE: "show-active-todos",
  SHOW_COMPLETED: "show-completed-todos",
  SHOW_ALL: "show-all-completed-todos",
};

const reducer = (todoList, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...todoList,
        list: [
          ...todoList.list,
          { id: Date.now(), title: action.payload.title, completed: false },
        ],
      };

    case ACTIONS.GET_LOCAL_DATA:
      return { filterOption: "all", list: action.payload };
    case ACTIONS.COMPLETE_TODO:
      const updatedList = todoList.list.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

      return { ...todoList, list: updatedList };

    case ACTIONS.REMOVE_TODO:
      const filteredList = todoList.list.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...todoList, list: filteredList };

    case ACTIONS.CLEAR_COMPLETED:
      const incompletedTodos = todoList.list.filter((todo) => !todo.completed);
      console.log(incompletedTodos.length);
      return { ...todoList, list: incompletedTodos };

    case ACTIONS.SHOW_ACTIVE:
      return { ...todoList, filterOption: "active" };

    case ACTIONS.SHOW_ALL:
      return { ...todoList, filterOption: "all" };

    case ACTIONS.SHOW_COMPLETED:
      return { ...todoList, filterOption: "completed" };

    default:
      return todoList;
  }
};

const App = () => {
  const [todoList, dispatch] = useReducer(reducer, {
    filterOption: "all",
    list: [],
  });
  const [isLight, setIsLight] = useState(true);

  const changeThemeHandler = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodos) {
      dispatch({ type: ACTIONS.GET_LOCAL_DATA, payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    if (todoList.list.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList.list));
    } else {
      localStorage.removeItem("todoList");
    }
  }, [todoList]);

  return (
    <div className="wrapper" id={isLight ? "light" : "dark"}>
      <Header isLight={isLight} />
      <div className="container">
        <Title changeTheme={changeThemeHandler} />
        <AddTodo dispatch={dispatch} isLight={isLight} />
        <Filter
          isLight={isLight}
          filterOption={todoList.filterOption}
          dispatch={dispatch}
        />
        <List
          todoList={todoList.list}
          filterOption={todoList.filterOption}
          dispatch={dispatch}
          isLight={isLight}
        />
      </div>
    </div>
  );
};

export default App;
