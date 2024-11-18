import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login2}>
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
        <Image
          style={[styles.groupIcon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group9.png")}
        />
        <Image
          style={[styles.groupIcon5, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group10.png")}
        />
        <View style={[styles.group3, styles.groupPosition]}>
          <Pressable
            style={[styles.clipPathGroup, styles.groupPosition2]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/clip-path-group5.png")}
            />
          </Pressable>
          <View style={styles.group4}>
            <Image
              style={[styles.groupIcon6, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
            <Pressable
              style={[styles.group5, styles.groupPosition1]}
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
        <Image
          style={[styles.travelDiary1x1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/travel-diary1x-1.png")}
        />
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
    left: "5.58%",
    right: "5.58%",
    width: "88.84%",
    position: "absolute",
  },
  groupPosition2: {
    right: "0%",
    top: "0%",
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
  groupIcon4: {
    height: "6.22%",
    width: "23.3%",
    top: "20.77%",
    right: "38.67%",
    bottom: "73%",
    left: "38.02%",
    position: "absolute",
  },
  groupIcon5: {
    height: "15.71%",
    top: "42.06%",
    bottom: "42.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  clipPathGroup: {
    bottom: "41.75%",
    height: "58.25%",
    left: "0%",
    position: "absolute",
    width: "100%",
    right: "0%",
  },
  groupIcon6: {
    height: "77.14%",
    width: "68.23%",
    right: "31.77%",
    bottom: "22.86%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group5: {
    left: "74.87%",
    top: "1.43%",
    width: "25.13%",
    height: "98.57%",
  },
  group4: {
    height: "16.99%",
    width: "50.1%",
    top: "82.89%",
    right: "24.92%",
    bottom: "0.12%",
    left: "24.97%",
    position: "absolute",
  },
  group3: {
    height: "8.84%",
    top: "73.18%",
    bottom: "17.98%",
  },
  travelDiary1x1: {
    height: "5.47%",
    width: "23.95%",
    top: "27.47%",
    right: "38.37%",
    bottom: "67.06%",
    left: "37.67%",
    position: "absolute",
  },
  group: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  login2: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login1;
