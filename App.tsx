import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext, ThemeProvider } from "common/context/ThemeContext";
import StackNavigator from "navigation/StackNavigator";

const AppContent: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? "#000" : "#fff"}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
