import React, { useContext } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Account from "app/account/Account";
import { ThemeContext } from "common/context/ThemeContext";
import { RootStackParamList } from "common/interfaces";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
        headerTintColor: theme === "dark" ? "#fff" : "#000",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 200,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 0,
              },
            },
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
