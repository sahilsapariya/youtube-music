import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import BackArrowIcon from "assets/icons/arrow-back.svg";
import { ThemeContext } from "common/context/ThemeContext";
import debounce from "lodash/debounce";

const Search: React.FC = () => {
  const { theme, iconColor } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Searched Text:", searchText);
  };

  const getSuggestions = useCallback(
    debounce((text: string) => {
      console.log("Fetching suggestions for:", text);
      // TODO: Fetch or filter logic here
    }, 500),
    []
  );

  const handleTextChange = (text: string) => {
    setSearchText(text);
    getSuggestions(text);
  };

  return (
    <ScreenWrapper>
      <ThemedView style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowIcon
            fill={iconColor}
            width={32}
            height={32}
            style={styles.backArrowIcon}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search songs, artist"
          style={[
            theme === "dark"
              ? { backgroundColor: "#222", color: "#fff" }
              : { backgroundColor: "#f4f4f4", color: "#000" },
            styles.searchInput,
          ]}
          placeholderTextColor={"#888"}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </ThemedView>
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
    flex: 6,
  },
  searchInput: {
    flex: 6,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
