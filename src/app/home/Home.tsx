import { Button } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "common/context/ThemeContext";
import { ThemedText } from "common/components/ThemedText";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import { Colors } from "constants/colors";

const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenWrapper>
      <ThemedView>
        <ThemedText
          lightBorderColor={Colors.light.border}
          darkBorderColor={Colors.dark.border}
        >
          Home
        </ThemedText>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </ThemedView>
    </ScreenWrapper>
  );
};

export default Home;
