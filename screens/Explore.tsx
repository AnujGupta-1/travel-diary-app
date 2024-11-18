import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Explore = () => {
  return (
    <View style={[styles.explore, styles.exploreLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.exploreLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group25.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exploreLayout: {
    overflow: "hidden",
    width: "100%",
  },
  clipPathGroup: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  explore: {
    flex: 1,
    height: 932,
  },
});

export default Explore;
