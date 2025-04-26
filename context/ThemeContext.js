import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (newTheme) => {
    if (newTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
