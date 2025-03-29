import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
  View,
} from "react-native";
import Pagination from "./Pagination";
import { ThemedView } from "common/components/ThemedView";

const { width: screenWidth } = Dimensions.get("window");

interface SwiperProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemWidth?: number;
  containerStyle?: ViewStyle;
  showPagination?: boolean;
}

const Swiper = <T,>({
  data,
  renderItem,
  itemWidth = screenWidth,
  containerStyle = {},
  showPagination = false,
}: SwiperProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(index);
  };

  return (
    <ThemedView style={containerStyle}>
      <ScrollView
        horizontal
        pagingEnabled={false} // Disable pagingEnabled since we're handling snapping manually
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={itemWidth} // Ensures each item snaps correctly
        snapToAlignment="start" // Ensures the next item starts from its beginning
        decelerationRate="fast" // Makes scrolling feel natural
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {data.map((item, index) => (
          <View key={index} style={{ width: itemWidth }}>
            {renderItem(item, index)}
          </View>
        ))}
      </ScrollView>
      {showPagination && <Pagination data={data} activeIndex={activeIndex} />}
    </ThemedView>
  );
};

export default Swiper;
