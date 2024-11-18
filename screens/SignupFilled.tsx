import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const SignupFilled = () => {
  return (
    <View style={styles.signupFilled}>
      <View style={[styles.group, styles.groupIconPosition]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.groupIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <View style={[styles.group2, styles.groupLayout]}>
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group5.png")}
            />
          </View>
        </View>
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={[styles.group4, styles.groupIconPosition1]}>
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group13.png")}
            />
            <Image
              style={[styles.groupIcon5, styles.groupIconLayout1]}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
            <Image
              style={[styles.groupIcon6, styles.groupIconLayout1]}
              resizeMode="cover"
              source={require("../assets/group15.png")}
            />
          </View>
          <View style={styles.group5}>
            <Image
              style={[styles.groupIcon7, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group16.png")}
            />
            <Image
              style={[styles.groupIcon8, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group17.png")}
            />
          </View>
          <Image
            style={[styles.clipPathGroup, styles.groupIconLayout2]}
            resizeMode="cover"
            source={require("../assets/clip-path-group7.png")}
          />
        </View>
        <View style={[styles.group6, styles.groupPosition]}>
          <View style={[styles.group7, styles.groupIconPosition1]}>
            <Image
              style={[styles.groupIcon9, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group18.png")}
            />
            <Image
              style={[styles.groupIcon10, styles.groupIconLayout2]}
              resizeMode="cover"
              source={require("../assets/group19.png")}
            />
            <Image
              style={[styles.groupIcon11, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group20.png")}
            />
          </View>
          <View style={[styles.group8, styles.groupIconPosition1]}>
            <Image
              style={[styles.clipPathGroup1, styles.clipGroupLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group8.png")}
            />
            <Image
              style={[styles.clipPathGroup2, styles.clipGroupLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group9.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: "95.42%",
    position: "absolute",
  },
  groupPosition: {
    left: "5.58%",
    right: "5.58%",
    width: "88.84%",
    position: "absolute",
  },
  groupIconPosition1: {
    width: "100%",
    left: "0%",
    right: "0%",
  },
  groupIconLayout1: {
    height: "26.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupIconLayout: {
    bottom: "44.66%",
    top: "45.63%",
    width: "43.59%",
    height: "9.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  clipGroupLayout: {
    height: "42.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    width: "8.84%",
    top: "3.82%",
    right: "91.16%",
    bottom: "0.76%",
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
    height: "30.05%",
    bottom: "69.95%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon5: {
    top: "38.8%",
    bottom: "34.97%",
  },
  groupIcon6: {
    top: "73.77%",
    bottom: "0%",
  },
  group4: {
    height: "60.4%",
    bottom: "39.6%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon7: {
    height: "98.16%",
    width: "5.18%",
    right: "94.82%",
    bottom: "1.84%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon8: {
    height: "76.07%",
    width: "91.84%",
    top: "23.93%",
    left: "8.16%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  group5: {
    height: "5.38%",
    width: "80.84%",
    top: "69.64%",
    right: "18.12%",
    bottom: "24.98%",
    left: "1.05%",
    position: "absolute",
  },
  clipPathGroup: {
    height: "15.84%",
    top: "84.16%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  group3: {
    height: "32.51%",
    top: "13.41%",
    bottom: "54.08%",
  },
  groupIcon9: {
    right: "56.41%",
    left: "0%",
  },
  groupIcon10: {
    width: "4.06%",
    right: "47.93%",
    left: "48.01%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon11: {
    left: "56.41%",
    right: "0%",
  },
  group7: {
    height: "6.81%",
    bottom: "93.19%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  clipPathGroup1: {
    bottom: "57.14%",
    top: "0%",
  },
  clipPathGroup2: {
    top: "57.14%",
    bottom: "0%",
  },
  group8: {
    height: "74.07%",
    top: "25.93%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  group6: {
    height: "16.22%",
    top: "48.8%",
    bottom: "34.98%",
  },
  group: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  signupFilled: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignupFilled;
