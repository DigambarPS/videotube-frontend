import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(""); // accent theme
  const [mode, setMode] = useState("light");  // light or dark

    useEffect(() => {
    const root = document.documentElement;

    // set accent theme
    root.setAttribute("data-theme", theme);

    // set dark/light mode
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mode]);

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));
  const changeTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;