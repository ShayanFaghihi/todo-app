import React from "react";

import "./Title.css";

const Title = (props) => {
  const theme = {
    light: {
      iconSrc: "/images/icon-moon.svg",
    },

    dark: {
      iconSrc: "/images/icon-sun.svg",
    },
  };

  const toggleTheme = () => {
    props.changeTheme();
  };
  return (
    <div className="title">
      <h1>TODO</h1>
      <div className="toggle">
        <input type="checkbox" id="switch" name="theme" onClick={toggleTheme} />
        <label htmlFor="switch" className="switch">
          <span>
            <img src="/images/icon-moon.svg" alt="Change Theme Image" />
          </span>
          <span>
            <img src="/images/icon-sun.svg" alt="Change Theme Image" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Title;
