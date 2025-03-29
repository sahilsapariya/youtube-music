import { Image, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { ThemedView } from "common/components/ThemedView";
import { ThemedText } from "common/components/ThemedText";
import NumberConverter from "utils/NumberConverter";
import MoreVertical from "assets/icons/more-vert.svg";
import { ThemeContext } from "common/context/ThemeContext";

const ListItem = ({ song }) => {
  const { iconColor } = useContext(ThemeContext);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require("assets/images/songs/tu-hai-kahan.jpeg")}
            style={styles.image}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.textContainer}>
        <ThemedText
          ellipsizeMode="tail"
          numberOfLines={2}
          style={styles.songText}
        >
          {song.title}
        </ThemedText>

        <ThemedText
          style={styles.artistInfo}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {song.artist} • {NumberConverter(song.plays)}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.optionsContainer}>
        <MoreVertical fill={iconColor} />
      </ThemedView>
    </ThemedView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  songText: {
    fontSize: 16,
    fontWeight: "500",
  },
  textContainer: {
    flex: 11,
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: "column",
  },
  artistInfo: {
    fontSize: 14,
    color: "#888",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
