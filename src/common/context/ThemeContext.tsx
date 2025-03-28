import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

export type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  iconColor: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
  iconColor: "#fff",
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>("dark");
  const [iconColor, setIconColor] = useState("#fff");

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? "dark" : "light");
      setIconColor(colorScheme === "dark" ? "#fff" : "#000");
    });
    return () => listener.remove();
  }, []);

  // useEffect(() => {
  //   setTheme(systemColorScheme === "dark" ? "dark" : "light");
  // }, [systemColorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setIconColor((prevColor) => (prevColor === "#000" ? "#fff" : "#000"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, iconColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
