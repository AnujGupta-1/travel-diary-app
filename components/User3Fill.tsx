import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const User3Fill = () => {
  return (
    <View style={styles.user3Fill}>
      <Image
        style={styles.clipPathGroup}
        resizeMode="cover"
        source={require("../assets/clip-path-group27.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clipPathGroup: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  user3Fill: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default User3Fill;
