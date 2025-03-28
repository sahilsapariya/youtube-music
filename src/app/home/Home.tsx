import React, { useContext } from "react";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Header from "./components/Header";
import { ThemeContext } from "common/context/ThemeContext";
import { Button, StyleSheet } from "react-native";
import TagScroller from "./components/TagScroller";

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <>
        <Header />
        <TagScroller />
        <Button onPress={toggleTheme} title="toggle theme" />
      </>
    </ScreenWrapper>
  );
};


export default Home;
