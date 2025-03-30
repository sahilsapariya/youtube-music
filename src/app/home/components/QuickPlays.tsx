import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import Swiper from "common/components/Swiper";
import ListItem from "common/components/ListItem";
import { ThemedText } from "common/components/ThemedText";
import { ThemedView } from "common/components/ThemedView";

type Song = {
  id: number;
  title: string;
  image: any;
  plays: number;
  artist: string;
};

type QuickPlaysProps = {
  data: Song[];
};

const ITEMS_PER_PAGE = 4;
const { width: screenWidth } = Dimensions.get("window");

const QuickPlays: React.FC<QuickPlaysProps> = ({ data }) => {
  // Split the songs list into chunks of 4 per page
  const pages: Song[][] = [];
  for (let i = 0; i < data.length; i += ITEMS_PER_PAGE) {
    pages.push(data.slice(i, i + ITEMS_PER_PAGE));
  }

  const renderPage = (songs: Song[], index: number) => (
    <ThemedView key={index} style={styles.pageContainer}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem song={item} />}
      />
    </ThemedView>
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Quick Plays
        </ThemedText>
        <ThemedView>
          <ThemedText
            type={"roundedOutlineButton"}
            darkBorderColor="#333"
            lightBorderColor="#999"
          >
            Play all
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <Swiper
        data={pages}
        renderItem={renderPage}
        itemWidth={screenWidth - 40}
      />
    </View>
  );
};

export default QuickPlays;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pageContainer: {
    margin: 3,
    paddingHorizontal: 10,
  },
});
