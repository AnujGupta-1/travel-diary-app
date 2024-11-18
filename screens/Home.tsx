import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
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
  home: {
    flex: 1,
    height: 932,
  },
});

export default Home;
