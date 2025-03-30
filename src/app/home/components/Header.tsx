import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedView } from "common/components/ThemedView";
import { ThemeContext } from "common/context/ThemeContext";
import Search from "assets/icons/search.svg";
import Notifications from "assets/icons/notifications.svg";
import Logo from "assets/icons/logo.svg";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "common/interfaces";
import { StackNavigationProp } from "@react-navigation/stack";

const Header: React.FC = () => {
  const { iconColor } = useContext(ThemeContext);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToAccount = () => {
    navigation.navigate("Account");
  };

  return (
    <ThemedView style={styles.container}>
      <View>
        <Logo height={24} color={iconColor} />
      </View>
      <View style={styles.iconContainer}>
        <Notifications width={28} height={28} fill={iconColor} />
        <Search width={28} height={28} fill={iconColor} />
        <Pressable onPress={goToAccount}>
          <Image
            source={require("assets/images/user.jpg")}
            style={styles.profileImage}
          />
        </Pressable>
      </View>
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
});
