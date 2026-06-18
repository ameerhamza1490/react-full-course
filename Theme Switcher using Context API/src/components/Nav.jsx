import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav = () => {
  const [theme]=useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h1>Ameer</h1>
      <Nav2 />
    </div>
  );
};

export default Nav;
