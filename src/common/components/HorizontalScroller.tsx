import React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  contentContainerStyle,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollViewContainer,
        contentContainerStyle,
      ]}
      className="flex-grow-0"
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
});

export default HorizontalScroller;
