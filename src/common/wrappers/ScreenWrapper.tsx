import { SafeAreaView, StyleSheet, Platform } from "react-native";
import React from "react";

const ScreenWrapper = ({ children }: { children: React.ReactElement }) => {
  return <SafeAreaView style={styles.rootContainer}>{children}</SafeAreaView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 35 : 0,
    marginHorizontal: 16,
  },
});
