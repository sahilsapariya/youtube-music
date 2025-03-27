import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "common/components/ThemedView";

const ScreenWrapper = ({ children }: { children: React.ReactElement }) => {
  return <ThemedView style={styles.rootContainer}>{children}</ThemedView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
