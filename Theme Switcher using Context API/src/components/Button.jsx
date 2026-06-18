import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    console.log("Hello");
  };
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Button;
