import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "common/components/ThemedView";
import { ThemeContext } from "common/context/ThemeContext";

interface PaginationProps {
  data: any[];
  activeIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, activeIndex }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <ThemedView style={styles.paginationContainer}>
      {data.map((_, index) => (
        <ThemedView
          key={index}
          style={[
            styles.dot,
            activeIndex === index
              ? {
                  backgroundColor: isDarkMode ? "#fff" : "#000",
                  width: 7,
                  height: 7,
                }
              : { backgroundColor: isDarkMode ? "#aaa" : "#666" },
          ]}
        />
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 16,
    marginHorizontal: 2,
  },
});

export default Pagination;
