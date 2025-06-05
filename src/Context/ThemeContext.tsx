import { createContext, ReactNode, useEffect, useState } from "react";

type theme = "light" | "dark";

interface themeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const themeContext = createContext<themeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): theme => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored as theme;
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return systemDark ? "dark" : "light";
    }
    return "light";
  };
  const [theme, setTheme] = useState<theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
