import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const AddNewTrip = () => {
  return (
    <View style={[styles.addNewTrip, styles.addNewTripLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.addNewTripLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addNewTripLayout: {
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
  addNewTrip: {
    flex: 1,
    height: 932,
  },
});

export default AddNewTrip;
