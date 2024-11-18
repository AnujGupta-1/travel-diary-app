import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const ProfileSettings = () => {
  return (
    <View style={[styles.profileSettings, styles.clipPathGroupLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.clipPathGroupLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group15.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clipPathGroupLayout: {
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
  profileSettings: {
    flex: 1,
    height: 932,
  },
});

export default ProfileSettings;
