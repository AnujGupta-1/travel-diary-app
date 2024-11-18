import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.group, styles.groupPosition1]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
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
              style={[styles.groupIcon1, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
            <Image
              style={[styles.groupIcon2, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.groupIcon3, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group5.png")}
            />
          </View>
        </View>
        <View style={styles.group3}>
          <View style={[styles.group, styles.groupPosition1]}>
            <Image
              style={[styles.vectorIcon1, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.travelDiary1x1, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/travel-diary1x-1.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.group5, styles.groupPosition]}
          onPress={() => navigation.navigate("Login1")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group21.png")}
          />
        </Pressable>
        <View style={[styles.group6, styles.groupPosition]}>
          <Image
            style={[styles.clipPathGroup, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/clip-path-group5.png")}
          />
          <View style={styles.group7}>
            <Image
              style={[styles.groupIcon4, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
            <Pressable
              style={[styles.group8, styles.groupPosition1]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Image
                style={[styles.icon, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/group12.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: "95.42%",
    position: "absolute",
  },
  groupPosition: {
    width: "88.84%",
    right: "5.58%",
    left: "5.58%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
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
  vectorIcon1: {
    height: "51.15%",
    width: "97.28%",
    right: "2.23%",
    bottom: "48.85%",
    left: "0.49%",
    top: "0%",
    position: "absolute",
  },
  travelDiary1x1: {
    height: "44.97%",
    top: "55.03%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  group: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  group3: {
    height: "12.17%",
    width: "23.95%",
    top: "20.77%",
    right: "38.14%",
    bottom: "67.06%",
    left: "37.91%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group5: {
    top: "42.06%",
    bottom: "42.23%",
    height: "15.71%",
  },
  clipPathGroup: {
    height: "58.25%",
    bottom: "41.75%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  groupIcon4: {
    height: "77.14%",
    width: "68.23%",
    right: "31.77%",
    bottom: "22.86%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group8: {
    left: "74.87%",
    top: "1.43%",
    width: "25.13%",
    height: "98.57%",
  },
  group7: {
    height: "16.99%",
    width: "50.1%",
    top: "82.89%",
    right: "24.92%",
    bottom: "0.12%",
    left: "24.97%",
    position: "absolute",
  },
  group6: {
    height: "8.84%",
    top: "73.18%",
    bottom: "17.98%",
  },
  login: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
