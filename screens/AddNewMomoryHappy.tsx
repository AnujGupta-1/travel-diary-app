import * as React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";

const AddNewMomoryHappy = () => {
  return (
    <View style={styles.addNewMomoryHappy}>
      <View style={[styles.group, styles.groupIconPosition]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.groupIcon2, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <View style={[styles.group2, styles.groupLayout]}>
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.groupIcon5, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group5.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.clipPathGroup, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/clip-path-group2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    left: "2.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: "95.42%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  groupIcon: {
    height: "9.23%",
    top: "90.77%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon1: {
    height: "6.5%",
    width: "93.72%",
    top: "6.82%",
    right: "3.84%",
    bottom: "86.67%",
  },
  groupIcon2: {
    width: "8.84%",
    top: "3.82%",
    right: "91.16%",
    bottom: "0.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  groupIcon3: {
    height: "96%",
    width: "34.23%",
    bottom: "4%",
    left: "65.77%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon4: {
    height: "98.4%",
    width: "21.84%",
    top: "0.8%",
    right: "44.06%",
    bottom: "0.8%",
    left: "34.1%",
    position: "absolute",
  },
  groupIcon5: {
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
  clipPathGroup: {
    height: "77.47%",
    width: "95.12%",
    top: "13.3%",
    right: "2.44%",
    bottom: "9.23%",
  },
  group: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  addNewMomoryHappy: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddNewMomoryHappy;
