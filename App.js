import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventScreen from "./screens/EventScreen.js";
import BotScreen from "./screens/BotScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import NewEventScreen from "./screens/NewEventScreen.js";

<<<<<<< HEAD
//Initializes component we can use to enable navigation between multiple screens.
=======
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './components/drawercontent';

{
  /* Initializes component we can use to enable navigation between multiple screens. */
}
>>>>>>> cd438abbcd11ed5ba02b711b0d03a97fcce89d74
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Dashboard() {
  return (
    <Stack.Navigator  screenOptions={{
    headerShown: true
  }}>
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="Events" component={EventScreen} />
      <Stack.Screen name="ChatBot" component={BotScreen} />
      <Stack.Screen name="NewEvent" component={NewEventScreen} />
    </Stack.Navigator>

  );
}




// This is the entry point of our app!!
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{  headerShown: false}}
      drawerContent={props => <DrawerContent {... props} />}
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
