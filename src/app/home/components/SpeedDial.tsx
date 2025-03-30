import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import { ThemedView } from "common/components/ThemedView";
import Swiper from "common/components/Swiper";
import { ThemedText } from "common/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";

const ITEMS_PER_PAGE = 9;
const { width: screenWidth } = Dimensions.get("window");

type Song = {
  id: number;
  title: string;
  image: any;
};

interface SpeedDialProps {
  songs: Song[];
}

const SpeedDial: React.FC<SpeedDialProps> = ({ songs }) => {
  // Split data into pages of 9 items per page
  const pages: Song[][] = [];
  for (let i = 0; i < songs.length; i += ITEMS_PER_PAGE) {
    pages.push(songs.slice(i, i + ITEMS_PER_PAGE));
  }

  // Render individual page with 9 items
  const renderPage = (item: Song[]) => (
    <ThemedView style={styles.page}>
      <FlatList
        data={item}
        keyExtractor={(song) => song.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <ThemedView style={styles.card}>
            <ThemedView style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.image}
                alt={item.title}
              />
            </ThemedView>
            <View style={styles.itemTitleContainer}>
              <LinearGradient
                colors={["#222", "#222", "rgba(10, 10, 10, 0)"]}
                locations={[0, 0.2, 1]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
              >
                <ThemedText
                  style={styles.itemTitle}
                  type={"label"}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.title}
                </ThemedText>
              </LinearGradient>
            </View>
          </ThemedView>
        )}
      />
    </ThemedView>
  );

  return (
    <View style={styles.container}>
      <ThemedText type={"title"} style={styles.title}>
        Speed Dial
      </ThemedText>
      <Swiper data={pages} renderItem={renderPage} showPagination={true} />
    </View>
  );
};

export default SpeedDial;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 8,
  },
  page: {
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 10,
    margin: 3,
    width: screenWidth / 3 - 20,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: screenWidth / 3 - 20,
    borderRadius: 8,
    zIndex: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  itemTitleContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
  },
  itemTitle: {
    color: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 2,
    width: "100%",
  },
});
