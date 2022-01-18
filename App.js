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

import PreOnboardingScreen from "./screens/PreOnboardingScreen.js";
import OnboardingScreen from "./screens/OnboardingScreen.js";

import EventScreen from "./screens/EventScreen.js";
import BotScreen from "./screens/BotScreen2.js";

import HomeScreen from "./screens/HomeScreen.js";
import NewEventScreen from "./screens/NewEventScreen.js";
import EmergencyScreen from "./screens/EmergencyScreen.js";

//Imports "General Health Tips" Screens
import StressScreen from "./screens/tips/StressScreen.js";
import SleepScreen from "./screens/tips/SleepScreen.js";
import COVIDProtocolScreen from "./screens/tips/COVIDProtocolScreen.js";

import ProfileScreen from "./screens/ProfileScreen.js";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Individual Topic screens
import MentalScreen from "./screens/topics/MentalHealth";
import NutritionScreen from "./screens/topics/Nutrition";
import PrimaryCareScreen from "./screens/topics/PrimaryCare";
import PhysicalScreen from "./screens/topics/PhysicalHealth";
import SexualScreen from "./screens/topics/SexualHealth";
import UrgentCareScreen from "./screens/topics/UrgentCare";

{
  /* Initializes component we can use to enable navigation between multiple screens. */
}
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Events" component={EventScreen} />
      <Stack.Screen name="ChatBot" component={BotScreen} />
      <Stack.Screen name="NewEvent" component={NewEventScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />

      <Stack.Screen name="Stress" component={StressScreen} />
      <Stack.Screen name="Sleep" component={SleepScreen} />
      <Stack.Screen name="COVIDProtocol" component={COVIDProtocolScreen} />
    </Stack.Navigator>
  );
}

function TopicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Mental"
        component={MentalScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrimaryCare"
        component={PrimaryCareScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhysicalHealth"
        component={PhysicalScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SexualHealth"
        component={SexualScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UrgentCare"
        component={UrgentCareScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
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
        <Drawer.Screen
          name="PreOnboarding"
          component={PreOnboardingScreen}
          options={{ swipeEnabled: false }}
        />
        <Drawer.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ swipeEnabled: false }}
        />
        <Drawer.Screen name="Dashboard" component={DashboardStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen name="Topic" component={TopicStack} />
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
