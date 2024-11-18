import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const OverlayShareMore = () => {
  return (
    <View style={styles.overlayShareMore}>
      <View style={[styles.group, styles.groupLayout]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.clipPathGroup, styles.clipGroupLayout]}
            resizeMode="cover"
            source={require("../assets/clip-path-group16.png")}
          />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group43.png")}
          />
          <Image
            style={[styles.clipPathGroup1, styles.clipGroupLayout]}
            resizeMode="cover"
            source={require("../assets/clip-path-group17.png")}
          />
        </View>
        <View style={styles.group2}>
          <View style={[styles.group3, styles.groupPosition1]}>
            <Image
              style={[styles.clipPathGroup2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group18.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group44.png")}
            />
          </View>
          <View style={styles.group4}>
            <Image
              style={[styles.clipPathGroup3, styles.clipGroupPosition]}
              resizeMode="cover"
              source={require("../assets/clip-path-group18.png")}
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group45.png")}
            />
          </View>
          <View style={[styles.group5, styles.groupPosition1]}>
            <Image
              style={[styles.clipPathGroup4, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group19.png")}
            />
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group46.png")}
            />
          </View>
          <View style={[styles.group6, styles.groupPosition1]}>
            <Image
              style={[styles.clipPathGroup5, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group20.png")}
            />
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group47.png")}
            />
          </View>
        </View>
        <View style={styles.group7}>
          <View style={[styles.group8, styles.groupPosition]}>
            <Image
              style={[styles.clipPathGroup6, styles.clipGroupPosition]}
              resizeMode="cover"
              source={require("../assets/clip-path-group21.png")}
            />
            <Image
              style={[styles.groupIcon5, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group48.png")}
            />
          </View>
          <View style={[styles.group9, styles.groupPosition]}>
            <Image
              style={[styles.clipPathGroup7, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group22.png")}
            />
            <Image
              style={[styles.groupIcon6, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group49.png")}
            />
          </View>
          <View style={[styles.group10, styles.groupPosition]}>
            <Image
              style={[styles.clipPathGroup8, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group23.png")}
            />
            <Image
              style={[styles.groupIcon7, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group50.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: "100%",
    bottom: "0%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  clipGroupLayout: {
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    width: "18.87%",
    top: "0%",
    position: "absolute",
  },
  clipGroupPosition: {
    bottom: "24.91%",
    height: "75.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    width: "25.86%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  clipPathGroup: {
    right: "94.67%",
    left: "0%",
  },
  groupIcon: {
    height: "61.5%",
    width: "21.47%",
    top: "19%",
    right: "39.33%",
    bottom: "19.5%",
    left: "39.2%",
  },
  clipPathGroup1: {
    left: "94.67%",
    right: "0%",
  },
  group1: {
    height: "7.63%",
    width: "90.36%",
    right: "4.82%",
    bottom: "92.37%",
    left: "4.82%",
    top: "0%",
    position: "absolute",
  },
  clipPathGroup2: {
    height: "64.45%",
    bottom: "35.55%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon1: {
    height: "27.07%",
    width: "65.33%",
    top: "72.93%",
    right: "16.83%",
    left: "17.83%",
    bottom: "0%",
  },
  group3: {
    height: "98.94%",
    right: "81.13%",
    bottom: "1.06%",
    left: "0%",
  },
  clipPathGroup3: {
    width: "90.77%",
    right: "5.45%",
    left: "3.78%",
  },
  groupIcon2: {
    height: "15.02%",
    top: "84.98%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  group4: {
    height: "84.91%",
    width: "20.79%",
    right: "52.96%",
    bottom: "15.09%",
    left: "26.26%",
    top: "0%",
    position: "absolute",
  },
  clipPathGroup4: {
    height: "63.76%",
    bottom: "36.24%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon3: {
    height: "26.25%",
    width: "60%",
    top: "73.75%",
    right: "19.5%",
    left: "20.5%",
    bottom: "0%",
  },
  group5: {
    right: "27.04%",
    left: "54.09%",
    bottom: "0%",
    height: "100%",
  },
  clipPathGroup5: {
    height: "77.82%",
    bottom: "22.18%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon4: {
    height: "11.93%",
    width: "93.17%",
    top: "88.07%",
    right: "2.5%",
    left: "4.33%",
    bottom: "0%",
  },
  group6: {
    height: "81.93%",
    bottom: "18.07%",
    left: "81.13%",
    right: "0%",
  },
  group2: {
    height: "35.92%",
    width: "76.63%",
    top: "19.85%",
    right: "11.69%",
    bottom: "44.24%",
    left: "11.69%",
    position: "absolute",
  },
  clipPathGroup6: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupIcon5: {
    height: "14.27%",
    width: "99.33%",
    top: "85.61%",
    right: "0.17%",
    bottom: "0.13%",
    left: "0.5%",
  },
  group8: {
    right: "74.14%",
    left: "0%",
    bottom: "0%",
    height: "100%",
  },
  clipPathGroup7: {
    height: "77.92%",
    bottom: "22.08%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon6: {
    height: "11.17%",
    width: "13.33%",
    top: "88.83%",
    right: "43.33%",
    left: "43.33%",
    bottom: "0%",
  },
  group9: {
    height: "96.37%",
    right: "37.07%",
    bottom: "3.63%",
    left: "37.07%",
  },
  clipPathGroup8: {
    height: "76.82%",
    bottom: "23.18%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon7: {
    height: "11.14%",
    width: "40.5%",
    top: "88.86%",
    right: "29.17%",
    left: "30.33%",
    bottom: "0%",
  },
  group10: {
    height: "97.75%",
    bottom: "2.25%",
    left: "74.14%",
    right: "0%",
  },
  group7: {
    height: "30.5%",
    width: "55.9%",
    top: "69.08%",
    right: "22.05%",
    bottom: "0.42%",
    left: "22.05%",
    position: "absolute",
  },
  group: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  overlayShareMore: {
    flex: 1,
    height: 262,
    overflow: "hidden",
    width: "100%",
  },
});

export default OverlayShareMore;
