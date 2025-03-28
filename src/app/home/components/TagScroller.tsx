import React, { useContext } from "react";
import { ThemedView } from "common/components/ThemedView";
import { ThemedText } from "common/components/ThemedText";
import { ScrollView, StyleSheet } from "react-native";
import { ThemeContext } from "common/context/ThemeContext";
import { GENRES } from "constants/index";

const TagScroller = () => {
  return (
    <ScrollView
      horizontal
      className="flex-grow-0"
      contentContainerStyle={TagScrollerStyles.scrollViewContainer}
    >
      {GENRES.map((genre, index) => {
        return <Tag tag={genre} key={index} />;
      })}
    </ScrollView>
  );
};
const TagScrollerStyles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
});

const Tag = ({ tag }: { tag: string }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemedView
      style={[
        TagStyles.tagContainer,
        theme === "light" ? TagStyles.lightMode : TagStyles.darkMode,
      ]}
    >
      <ThemedText type={"label"} onPress={() => {}}>
        {tag}
      </ThemedText>
    </ThemedView>
  );
};

const TagStyles = StyleSheet.create({
  tagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  lightMode: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
  },
  darkMode: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
  },
});

export default TagScroller;
