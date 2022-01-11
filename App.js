import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Initializes component we can use to enable navigation between multiple screens.
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/drawercontent";

import EventScreen from "./screens/EventScreen.js";
import BotScreen from "./screens/BotScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import NewEventScreen from "./screens/NewEventScreen.js";

//Imports "General Health Tips" Screens
import StressScreen from "./screens/tips/StressScreen.js";

/* import firebase from "@react-native-firebase/app"; */

{
  /* Initializes component we can use to enable navigation between multiple screens. */
}
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Dashboard() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen name="Events" component={EventScreen} />
      <Stack.Screen name="ChatBot" component={BotScreen} />
      <Stack.Screen name="NewEvent" component={NewEventScreen} />
      <Stack.Screen name="Stress" component={StressScreen} />
    </Stack.Navigator>
  );
}

// This is the entry point of our app!!
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
