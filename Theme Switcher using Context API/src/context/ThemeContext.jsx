import React, { createContext, useState } from "react";

//1st step. sb se pahlay context create krain gagy or sath hi export kdain gay usay
export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      //2nd step. jo context banaya hai usay provider bana kr children ko wrap
      krdain gay us main
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
