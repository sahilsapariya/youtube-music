import { StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import BackArrowIcon from "assets/icons/arrow-back.svg";
import { ThemeContext } from "common/context/ThemeContext";

const Search: React.FC = () => {
  const { theme, iconColor } = useContext(ThemeContext);

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Searched Text : ", searchText);
  };

  return (
    <ScreenWrapper>
      <>
        <ThemedView style={styles.searchContainer}>
          <BackArrowIcon
            fill={iconColor}
            width={32}
            height={32}
            style={styles.backArrowIcon}
          />
          <TextInput
            placeholder="Search songs, artist"
            style={[
              theme === "dark"
                ? { backgroundColor: "#888", color: "#555" }
                : {},
              styles.searchInput,
            ]}
          />
        </ThemedView>
      </>
    </ScreenWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  backArrowIcon: {
    flex: 6
  },
  searchInput: {
    flex: 6,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
