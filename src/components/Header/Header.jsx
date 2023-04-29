import React from "react";
import "./Header.css";
const Header = (props) => {
  const theme = {
    light: {
      mobileSrcSet: "/images/bg-mobile-light.jpg",
      desktopSrcSet: "/images/bg-desktop-light.jpg",
    },
    dark: {
      mobileSrcSet: "/images/bg-mobile-dark.jpg",
      desktopSrcSet: "/images/bg-desktop-dark.jpg",
    },
  };
  return (
    <header>
      <picture>
        <source
          srcSet={
            props.isLight ? theme.light.mobileSrcSet : theme.dark.mobileSrcSet
          }
          media="(max-width: 375px)"
        />
        <source
          srcSet={
            props.isLight ? theme.light.desktopSrcSet : theme.dark.desktopSrcSet
          }
        />
        <img
          src={
            props.isLight ? theme.light.desktopSrcSet : theme.dark.desktopSrcSet
          }
          alt="Background Image Mountains"
        />
      </picture>
    </header>
  );
};

export default Header;
