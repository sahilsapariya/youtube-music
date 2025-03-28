import React, { useContext } from "react";
import { Image } from "react-native";
import { ThemedView } from "common/components/ThemedView";
import { ThemeContext } from "common/context/ThemeContext";
import Search from "assets/icons/search.svg";
import Notifications from "assets/icons/notifications.svg";
import Logo from "assets/icons/logo.svg";

const Header = () => {
  const { iconColor } = useContext(ThemeContext);

  return (
    <ThemedView className="p-5 flex-row justify-between items-center w-full">
      <ThemedView>
        <Logo height={24} color={iconColor} />
      </ThemedView>
      <ThemedView className="flex-row gap-5 items-center">
        <Notifications width={28} height={28} fill={iconColor} />
        <Search width={28} height={28} fill={iconColor} />
        <Image
          source={require("assets/images/user.jpg")}
          width={24}
          height={24}
          alt="user profile"
          className="rounded-full w-7 h-7"
        />
      </ThemedView>
    </ThemedView>
  );
};

export default Header;
