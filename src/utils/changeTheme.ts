import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [darkmode, setDarkMode] = useState(theme === "light" ? true : false);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  const handleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setTheme(colorTheme);
  };

  return { handleMode, darkmode };
};
