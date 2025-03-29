import React, { useContext } from "react";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Header from "./components/Header";
import { ThemeContext } from "common/context/ThemeContext";
import { Button, ScrollView } from "react-native";
import TagScroller from "./components/TagScroller";
import { SONGS } from "constants/index";
import SpeedDial from "./components/SpeedDial";
import QuickPlays from "./components/QuickPlays";

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TagScroller />
          <SpeedDial songs={SONGS} />
          <QuickPlays data={SONGS} />
          <Button onPress={toggleTheme} title="toggle theme" />
        </ScrollView>
      </>
    </ScreenWrapper>
  );
};

export default Home;
