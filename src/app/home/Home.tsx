import React, { useContext } from "react";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Header from "./components/Header";
import { ThemeContext } from "common/context/ThemeContext";
import { Button, ScrollView, StyleSheet } from "react-native";
import { GENRES } from "constants/index";
import Tag from "./components/Tag";

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <>
        <Header />
        <ScrollView
          horizontal
          className="flex-grow-0"
          contentContainerStyle={styles.scrollViewContainer}
        >
          {GENRES.map((genre, index) => {
            return <Tag tag={genre} key={index} />;
          })}
        </ScrollView>
        <Button onPress={toggleTheme} title="toggle theme" />
      </>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
});

export default Home;
