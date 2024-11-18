import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const ViewTrips = () => {
  return (
    <View style={styles.viewTrips}>
      <View style={styles.group}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.groupIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group26.png")}
          />
          <View style={[styles.group2, styles.groupLayout]}>
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              resizeMode="cover"
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
            />
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
            />
          </View>
        </View>
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group27.png")}
        />
        <Image
          style={[styles.groupIcon5, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group28.png")}
        />
        <Image
          style={[styles.clipPathGroup, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/clip-path-group10.png")}
        />
        <Image
          style={[styles.groupIcon6, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group29.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: "95.42%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  groupIcon: {
    width: "8.84%",
    top: "3.82%",
    right: "91.16%",
    bottom: "0.76%",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  groupIcon1: {
    height: "96%",
    width: "34.23%",
    bottom: "4%",
    left: "65.77%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon2: {
    height: "98.4%",
    width: "21.84%",
    top: "0.8%",
    right: "44.06%",
    bottom: "0.8%",
    left: "34.1%",
    position: "absolute",
  },
  groupIcon3: {
    height: "97.6%",
    width: "24.52%",
    right: "75.48%",
    bottom: "2.4%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  group2: {
    width: "23.71%",
    bottom: "4.58%",
    left: "76.29%",
    right: "0%",
    top: "0%",
  },
  group1: {
    height: "1.41%",
    width: "76.79%",
    top: "2.52%",
    right: "9.02%",
    bottom: "96.07%",
    left: "14.19%",
    position: "absolute",
  },
  groupIcon4: {
    height: "6.44%",
    width: "93.72%",
    top: "8.8%",
    right: "3.02%",
    bottom: "84.76%",
    left: "3.26%",
    position: "absolute",
  },
  groupIcon5: {
    height: "0.54%",
    width: "32.33%",
    top: "97.75%",
    right: "34.88%",
    bottom: "1.72%",
    left: "32.79%",
    position: "absolute",
  },
  clipPathGroup: {
    height: "69.96%",
    width: "99.3%",
    top: "20.17%",
    right: "0.23%",
    bottom: "9.87%",
    left: "0.47%",
    position: "absolute",
  },
  groupIcon6: {
    height: "9.23%",
    top: "90.77%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  group: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  viewTrips: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewTrips;
