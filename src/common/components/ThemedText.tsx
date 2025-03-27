import React from "react";
import { ColorValue, Text, TextProps, TextStyle } from "react-native";
import { useThemeColor } from "common/hooks/useThemeColor";
import { Colors } from "constants/colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  type?: "title" | "default" | "label" | "caption" | null;
};

const textStyleVariants: Record<string, TextStyle> = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  default: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  caption: {
    fontSize: 12,
    fontStyle: "italic",
  },
  custom: {},
};

export function ThemedText({
  style,
  lightColor = Colors.light.text,
  darkColor = Colors.dark.text,
  lightBorderColor,
  darkBorderColor,
  type,
  ...otherProps
}: ThemedTextProps) {
  const color: string = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  ) as string;

  const borderColor =
    lightBorderColor || darkBorderColor
      ? useThemeColor(
          { light: lightBorderColor, dark: darkBorderColor },
          "border"
        )
      : undefined;

  const textStyle: TextStyle[] = [
    { color },
    textStyleVariants[type || "custom"],
    borderColor
      ? { borderColor: borderColor as ColorValue, borderWidth: 1 }
      : {},
    style as TextStyle,
  ];

  return <Text style={textStyle} {...otherProps} />;
}
