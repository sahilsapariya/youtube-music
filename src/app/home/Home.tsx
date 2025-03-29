import React, { useContext } from "react";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Header from "./components/Header";
import { ThemeContext } from "common/context/ThemeContext";
import { Button } from "react-native";
import TagScroller from "./components/TagScroller";
import { SONGS } from "constants/index";
import SpeedDial from "./components/SpeedDial";

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <>
        <Header />
        <TagScroller />
        <SpeedDial songs={SONGS} />
        <Button onPress={toggleTheme} title="toggle theme" />
      </>
    </ScreenWrapper>
  );
};

export default Home;
