import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Messages = () => {
  return (
    <View style={styles.messages}>
      <View style={[styles.group, styles.groupIconPosition3]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          resizeMode="cover"
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group30.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.groupIcon1, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group26.png")}
          />
          <View style={[styles.group2, styles.groupLayout1]}>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
            />
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
            />
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout]}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.group3}>
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group31.png")}
          />
          <View style={[styles.group4, styles.groupPosition2]}>
            <Image
              style={[styles.groupIcon6, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group32.png")}
            />
            <Image
              style={[styles.groupIcon7, styles.groupIconPosition2]}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
          </View>
          <View style={styles.group5}>
            <View style={[styles.group6, styles.groupIconLayout1]}>
              <Image
                style={[styles.groupIcon8, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group34.png")}
              />
              <Image
                style={[styles.groupIcon9, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group33.png")}
              />
            </View>
            <View style={styles.group7}>
              <View style={[styles.group8, styles.groupPosition1]}>
                <Image
                  style={[styles.clipPathGroup, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/clip-path-group11.png")}
                />
                <View style={[styles.group9, styles.groupPosition]}>
                  <Image
                    style={[styles.groupIcon10, styles.groupIconPosition1]}
                    resizeMode="cover"
                    source={require("../assets/group35.png")}
                  />
                  <Image
                    style={[styles.groupIcon11, styles.groupIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/group36.png")}
                  />
                </View>
              </View>
              <View style={[styles.group10, styles.groupPosition1]}>
                <Image
                  style={[styles.clipPathGroup1, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/clip-path-group12.png")}
                />
                <View style={styles.group11}>
                  <Image
                    style={[styles.groupIcon12, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group37.png")}
                  />
                  <Image
                    style={[styles.groupIcon13, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group38.png")}
                  />
                </View>
              </View>
              <View style={[styles.group12, styles.groupPosition1]}>
                <Image
                  style={[styles.clipPathGroup2, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/clip-path-group13.png")}
                />
                <View style={[styles.group13, styles.groupPosition]}>
                  <Image
                    style={[styles.groupIcon14, styles.groupIconPosition1]}
                    resizeMode="cover"
                    source={require("../assets/group39.png")}
                  />
                  <Image
                    style={[styles.groupIcon15, styles.groupIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/group40.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.group14, styles.groupPosition2]}>
            <Image
              style={[styles.groupIcon16, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group41.png")}
            />
            <Image
              style={[styles.groupIcon7, styles.groupIconPosition2]}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
          </View>
          <View style={[styles.group15, styles.groupPosition2]}>
            <Image
              style={[styles.groupIcon18, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group42.png")}
            />
            <Image
              style={[styles.groupIcon19, styles.groupIconPosition2]}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconPosition3: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout1: {
    height: "95.42%",
    position: "absolute",
  },
  groupPosition2: {
    left: "6.2%",
    height: "4.28%",
    position: "absolute",
  },
  groupIconPosition2: {
    bottom: "28.49%",
    top: "24.19%",
    height: "47.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    width: "100%",
    right: "0%",
  },
  groupPosition1: {
    height: "26.32%",
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "0.25%",
    height: "88.75%",
    top: "11%",
    right: "0%",
    position: "absolute",
  },
  groupIconPosition1: {
    bottom: "69.58%",
    height: "30.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    right: "-0.05%",
    top: "66.2%",
    height: "33.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
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
    height: "9.23%",
    top: "90.77%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon1: {
    width: "8.84%",
    top: "3.82%",
    right: "91.16%",
    bottom: "0.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  groupIcon2: {
    height: "96%",
    width: "34.23%",
    bottom: "4%",
    left: "65.77%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon3: {
    height: "98.4%",
    width: "21.84%",
    top: "0.8%",
    right: "44.06%",
    bottom: "0.8%",
    left: "34.1%",
    position: "absolute",
  },
  groupIcon4: {
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
  groupIcon5: {
    height: "13.81%",
    bottom: "86.19%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon6: {
    width: "18.25%",
    right: "81.75%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon7: {
    width: "4.86%",
    left: "95.14%",
  },
  group4: {
    top: "19.75%",
    bottom: "75.97%",
    right: "7.59%",
    width: "86.2%",
    left: "6.2%",
    height: "4.28%",
  },
  groupIcon8: {
    width: "16.91%",
    right: "83.09%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon9: {
    height: "45.83%",
    width: "4.84%",
    top: "23.44%",
    bottom: "30.73%",
    left: "95.16%",
    right: "0%",
    position: "absolute",
  },
  group6: {
    height: "10.2%",
    bottom: "89.8%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  clipPathGroup: {
    width: "16.43%",
    right: "83.57%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon10: {
    width: "37.87%",
    right: "62.13%",
  },
  groupIcon11: {
    width: "99.44%",
    left: "0.61%",
  },
  group9: {
    width: "80.28%",
    left: "19.72%",
  },
  group8: {
    width: "91.61%",
    right: "8.39%",
    bottom: "73.68%",
    top: "0%",
  },
  clipPathGroup1: {
    width: "16.68%",
    right: "83.32%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon12: {
    height: "40.85%",
    width: "43.01%",
    right: "56.31%",
    bottom: "59.15%",
    left: "0.68%",
    top: "0%",
    position: "absolute",
  },
  groupIcon13: {
    height: "28.35%",
    top: "71.34%",
    bottom: "0.3%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  group11: {
    height: "82%",
    width: "79.98%",
    bottom: "7%",
    left: "20.02%",
    top: "11%",
    right: "0%",
    position: "absolute",
  },
  group10: {
    width: "90.25%",
    top: "36.84%",
    right: "9.75%",
    bottom: "36.84%",
  },
  clipPathGroup2: {
    width: "15.05%",
    right: "84.95%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon14: {
    width: "35.64%",
    right: "64.36%",
  },
  groupIcon15: {
    width: "99.86%",
    left: "0.18%",
  },
  group13: {
    width: "81.63%",
    left: "18.37%",
  },
  group12: {
    top: "73.68%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  group7: {
    height: "80.77%",
    width: "76.15%",
    top: "19.23%",
    right: "17.97%",
    left: "5.88%",
    bottom: "0%",
    position: "absolute",
  },
  group5: {
    height: "43.31%",
    width: "86.58%",
    top: "32.17%",
    bottom: "24.51%",
    left: "5.83%",
    right: "7.59%",
    position: "absolute",
  },
  groupIcon16: {
    width: "13.79%",
    right: "86.21%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  group14: {
    top: "83.27%",
    bottom: "12.45%",
    right: "7.59%",
    width: "86.2%",
    left: "6.2%",
    height: "4.28%",
  },
  groupIcon18: {
    width: "58.32%",
    right: "41.68%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon19: {
    width: "4.95%",
    left: "95.05%",
  },
  group15: {
    width: "84.71%",
    top: "95.7%",
    right: "9.08%",
    bottom: "0.02%",
    left: "6.2%",
    height: "4.28%",
  },
  group3: {
    height: "46.62%",
    width: "93.72%",
    top: "7.62%",
    right: "3.84%",
    bottom: "45.76%",
    left: "2.44%",
    position: "absolute",
  },
  group: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  messages: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Messages;
