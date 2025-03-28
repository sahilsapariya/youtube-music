import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "common/interfaces";
import Home from "app/home/Home";
import "./global.css";

const Stack = createStackNavigator<RootStackParamList>();

import { ThemeContext, ThemeProvider } from "common/context/ThemeContext";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? "#000000" : "#ffffff"}
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
