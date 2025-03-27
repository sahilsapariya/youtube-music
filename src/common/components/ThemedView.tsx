import { View, type ViewProps, ColorValue } from "react-native";
import { useThemeColor } from "common/hooks/useThemeColor";
import { Colors } from "constants/colors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export function ThemedView({
  style,
  lightColor = Colors.light.background,
  darkColor = Colors.dark.background,
  lightBorderColor,
  darkBorderColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  ) as string;

  const borderColor =
    lightBorderColor || darkBorderColor
      ? (useThemeColor(
          { light: lightBorderColor, dark: darkBorderColor },
          "border"
        ) as string)
      : undefined;

  return (
    <View
      style={[
        { backgroundColor },
        borderColor
          ? { borderColor: borderColor as ColorValue, borderWidth: 1 }
          : {},
        style,
      ]}
      {...otherProps}
    />
  );
}
