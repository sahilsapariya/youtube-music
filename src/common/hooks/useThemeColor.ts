import { useContext } from "react";
import { ThemeContext } from "common/context/ThemeContext";
import { Colors } from "constants/colors";

type Colors = {
  background: string;
  text: string;
  border: string;
  [key: string]: string;
};

const defaultColors: Record<string, Colors> = Colors;

export function useThemeColor(
  { light, dark }: { light?: string; dark?: string },
  colorName: keyof Colors,
  overrideTheme?: "light" | "dark"
) {
  const { theme } = useContext(ThemeContext);
  const selectedTheme = overrideTheme || theme;

  const colorFromTheme =
    (selectedTheme === "dark" ? dark : light) || defaultColors[colorName];

  return colorFromTheme;
}
