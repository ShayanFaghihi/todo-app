import React, { useState } from "react";

import "./Filter.css";
import { ACTIONS } from "../../App";

const Filter = (props) => {
  const [selected, setSelected] = useState(props.filterOption);
  const filterHandler = (action) => {
    switch (action) {
      case ACTIONS.SHOW_ALL:
        setSelected("all");
        break;
      case ACTIONS.SHOW_ACTIVE:
        setSelected("active");
        break;
      case ACTIONS.SHOW_COMPLETED:
        setSelected("completed");
        break;
    }
    props.dispatch({ type: action });
  };
  return (
    <div className="todos-filter">
      <span
        className={selected === "all" ? "selected" : ""}
        onClick={() => filterHandler(ACTIONS.SHOW_ALL)}
      >
        All
      </span>
      <span
        className={selected === "active" ? "selected" : ""}
        onClick={() => filterHandler(ACTIONS.SHOW_ACTIVE)}
      >
        Active
      </span>
      <span
        className={selected === "completed" ? "selected" : ""}
        onClick={() => filterHandler(ACTIONS.SHOW_COMPLETED)}
      >
        Completed
      </span>
    </div>
  );
};

export default Filter;
