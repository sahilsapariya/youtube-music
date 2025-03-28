import React from "react";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Logo from "assets/icons/logo.svg";
import Header from "./components/Header";

const Home = () => {
  return (
    <ScreenWrapper>
      <ThemedView className="p-5 flex-row justify-between items-center w-full">
        <ThemedView>
          <Logo width={100} height={24} />
        </ThemedView>
        <Header />
      </ThemedView>
    </ScreenWrapper>
  );
};

export default Home;
