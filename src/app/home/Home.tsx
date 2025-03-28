import React, { useContext } from "react";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Logo from "assets/icons/logo.svg";
import Header from "./components/Header";
import { ThemeContext } from "common/context/ThemeContext";
import { Button } from "react-native";

const Home = () => {
  const { toggleTheme, iconColor } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <>
        <ThemedView className="p-5 flex-row justify-between items-center w-full">
          <ThemedView>
            <Logo width={100} height={24} color={iconColor} />
          </ThemedView>
          <Header />
        </ThemedView>
        <Button onPress={toggleTheme} title="toggle theme" />
      </>
    </ScreenWrapper>
  );
};

export default Home;
