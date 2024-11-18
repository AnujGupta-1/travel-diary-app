const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import AddNewMomoryNeutral from "./screens/AddNewMomoryNeutral";
import AddNewMomoryAnnoyed from "./screens/AddNewMomoryAnnoyed";
import AddNewMomoryHappy from "./screens/AddNewMomoryHappy";
import AddNewMemorySad from "./screens/AddNewMemorySad";
import AddNewMemoryAngry from "./screens/AddNewMemoryAngry";
import Login1 from "./screens/Login1";
import SignupFilled from "./screens/SignupFilled";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ViewTrips from "./screens/ViewTrips";
import Messages from "./screens/Messages";
import OverlayShare from "./screens/OverlayShare";
import ProfileSettings from "./screens/ProfileSettings";
import OverlayShareMore from "./screens/OverlayShareMore";
import AddNewTrip from "./screens/AddNewTrip";
import Explore from "./screens/Explore";
import TripDetails from "./screens/TripDetails";
import User3Fill from "./components/User3Fill";
import UserLine from "./components/UserLine";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewMomoryNeutral"
              component={AddNewMomoryNeutral}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewMomoryAnnoyed"
              component={AddNewMomoryAnnoyed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewMomoryHappy"
              component={AddNewMomoryHappy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewMemorySad"
              component={AddNewMemorySad}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewMemoryAngry"
              component={AddNewMemoryAngry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupFilled"
              component={SignupFilled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTrips"
              component={ViewTrips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayShare"
              component={OverlayShare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileSettings"
              component={ProfileSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayShareMore"
              component={OverlayShareMore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewTrip"
              component={AddNewTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TripDetails"
              component={TripDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
