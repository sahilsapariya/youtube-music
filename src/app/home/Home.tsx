import React from "react";
import { ThemedText } from "common/components/ThemedText";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Logo from "assets/icons/logo.svg";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Home = () => {
  // const { toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenWrapper>
      <ThemedView className="p-5 flex-row justify-between items-center w-full">
        <ThemedView>
          <Logo width={100} height={24} />
        </ThemedView>
        <ThemedView className="flex-row gap-5 items-center">
          <MaterialCommunityIcons name="cast" size={24} color="white"  />

          <Image
            source={require("assets/images/user.jpg")}
            width={24}
            height={24}
            alt="user profile"
            className="rounded-full w-8 h-8"
          />
        </ThemedView>
      </ThemedView>
    </ScreenWrapper>
  );
};

export default Home;
