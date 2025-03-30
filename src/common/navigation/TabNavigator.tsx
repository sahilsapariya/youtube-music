import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "app/home/Home";
import { ThemeContext } from "common/context/ThemeContext";
import HomeIconOutline from "assets/icons/home-outline.svg";
import HomeIconFilled from "assets/icons/home.svg";
import LibraryIconOutline from "assets/icons/library-outline.svg";
import LibraryIconFilled from "assets/icons/library.svg";
import ExploreIconOutline from "assets/icons/explore-outline.svg";
import ExploreIconFilled from "assets/icons/explore.svg";
import Library from "app/library/Library";
import Explore from "app/explore/Explore";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme, iconColor } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#1D1D1D" : "#F1F1F1",
        },
        tabBarIcon: ({ focused, size }) => {
          if (route.name === "Home")
            return focused ? (
              <HomeIconFilled width={size} color={iconColor} />
            ) : (
              <HomeIconOutline width={size} color={iconColor} />
            );
          else if (route.name === "Library")
            return focused ? (
              <LibraryIconFilled width={size} color={iconColor} />
            ) : (
              <LibraryIconOutline width={size} color={iconColor} />
            );
          else if (route.name === "Explore")
            return focused ? (
              <ExploreIconFilled width={size} color={iconColor} />
            ) : (
              <ExploreIconOutline width={size} color={iconColor} />
            );
        },
        tabBarLabelStyle: {
          color: iconColor,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
