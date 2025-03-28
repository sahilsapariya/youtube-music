import React, { useContext } from "react";
import { ThemedView } from "common/components/ThemedView";
import { ThemedText } from "common/components/ThemedText";
import { StyleSheet } from "react-native";
import { ThemeContext } from "common/context/ThemeContext";

const Tag = ({ tag }: { tag: string }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemedView
      style={[
        styles.tagContainer,
        theme === "light" ? styles.lightMode : styles.darkMode,
      ]}
    >
      <ThemedText type={"label"}>{tag}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  lightMode: {
    backgroundColor: "rgba(0, 0, 0, 0.05)", // Light background with slight gray tint
    borderColor: "rgba(0, 0, 0, 0.1)", // Light border with gray tint
    borderWidth: 1,
  },
  darkMode: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Dark background with transparency
    borderColor: "rgba(255, 255, 255, 0.2)", // Dark border with transparency
    borderWidth: 1,
  },
});

export default Tag;
