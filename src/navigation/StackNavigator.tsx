import React, { useContext } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Account from "app/account/Account";
import { ThemeContext } from "common/context/ThemeContext";
import { RootStackParamList } from "common/interfaces";
import CloseIcon from "assets/icons/close.svg";
import Search from "app/search/Search";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const { theme, iconColor } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
        headerTintColor: theme === "dark" ? "#fff" : "#000",
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
          headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
          headerShadowVisible: false,
          headerBackImage: () => (
            <CloseIcon fill={iconColor} width={32} height={32} />
          ),
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
                duration: 200,
              },
            },
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: "horizontal",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
