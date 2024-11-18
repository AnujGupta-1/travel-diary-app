import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const OverlayShare = () => {
  return (
    <View style={[styles.overlayShare, styles.overlayShareLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.overlayShareLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayShareLayout: {
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
  overlayShare: {
    flex: 1,
    height: 193,
  },
});

export default OverlayShare;
