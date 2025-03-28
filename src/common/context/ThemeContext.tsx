import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

export type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? "dark" : "light");
    });
    return () => listener.remove();
  }, []);

  // useEffect(() => {
  //   setTheme(systemColorScheme === "dark" ? "dark" : "light");
  // }, [systemColorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
