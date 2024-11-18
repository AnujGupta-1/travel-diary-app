import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const TripDetails = () => {
  return (
    <View style={[styles.tripDetails, styles.tripDetailsLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.tripDetailsLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group26.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tripDetailsLayout: {
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
  tripDetails: {
    flex: 1,
    height: 932,
  },
});

export default TripDetails;
