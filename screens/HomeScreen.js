import {React, useRef} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";

import TipList from "./../components/TipList.js";
import HealthcareList from "./../components/HealthcareList.js";
import UrgentCareList from "./../components/UrgentCareList.js";
import EventsNearYou from "./../components/EventsNearYou.js";
import EducationList from "./../components/EducationList.js";
import ExploreTopicsList from "./../components/ExploreTopics.js";

import { useScrollToTop } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const HomeScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Testudo",
    },
  ];



  const scrollRef = useRef();

const onPressTouch = () => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
}


  return (

    <SafeAreaView style={{ flexDirection: "column", backgroundColor: "#CAE7F8"}}>

        {/* Stuff at the top wrapped in this View:
          blue swoosh; welcome message; emergency banner */}
        <View>

        <TouchableOpacity onPress={onPressTouch} style={{paddingBottom: 15, backgroundColor: "white"}}>
          {/* Blue swoosh at the top of the page */}
          <Image
            source={require("../assets/blue-wave.png")}
            resizeMode="stretch"
            style={{ width: "100%" }}
          />
          {/* Hamburger Menu */}
          <TouchableOpacity
            style={styles.hamburgerwrapper}
            onPress={() => navigation.toggleDrawer()}
          >

            <Image
              source={require("../assets/hamburger.png")}
              style={styles.hamburger}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatbutton} onPress={() => navigation.navigate("ChatBot")}>
          <Image source={require("../assets/betabutton.png")} resizeMode="stretch" style={{bottom: -5, height: 40, width: 65,}} />
          </TouchableOpacity>

          {/* Welome message that uses the name of the user */}
          <Text style={styles.welcome_message}>
            Welcome back,{" "}
            <Text style={{ fontWeight: "bold" }}>{USER_DATA[0].name}.</Text>
          </Text>

          </TouchableOpacity>
          {/* Everything wrapped in this view is for the emergency banner at the top */}
          <View>
            <TouchableOpacity style={styles.red_banner}
            onPress={() => navigation.navigate("Emergency")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                  textDecorationLine: "underline",
                }}

              >
                Having an emergency?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView ref={scrollRef} style={styles.container}>

        {/* General Health Tips list (uses custom TipList component) */}
        <View>
          <Text
            style={{ left: 20, color: "#444444", fontSize: 15, marginTop: 20 }}
          >
            This Month's Health Tips
          </Text>
          {/* Our custom FlatList component for displaying tips */}
          <TipList />
        </View>

        {/* Your Healthcare list (uses custom HealthcareList component) */}
        <View style={{ marginVertical: 20 }}>
          <View style={{ backgroundColor: "#CAECFF" }}>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                left: 20,
                color: "#444444",
                fontSize: 15,
              }}
            >
              Your Saved Resources
            </Text>
          </View>

          <View style={{ backgroundColor: "#E4F3FB", paddingBottom: 20 }}>
            {/* The little ovals above the list (see Figma) */}
            {/* TO BE DONE: CREATE INDIVIDUAL CLASS */}
            <ScrollView
              style={{ flexDirection: "row", left: 8, marginTop: 10 }}
              horizontal={true}
            >
              <View style={styles.health_bubble}>
                <Text>Women's Health</Text>
              </View>
              <View style={styles.health_bubble}>
                <Text>Primary Care</Text>
              </View>
              <View style={styles.health_bubble}>
                <Text>Mental Health</Text>
              </View>
            </ScrollView>
            {/* Our custom FlatList component for displaying healthcare cards in a list */}
            <HealthcareList />
          </View>
        </View>

        {/* Explore Urgent Care Near You list (uses custom UrgentCareList component) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Explore Urgent Care Near You
          </Text>
          {/* Our custom FlatList component for displaying tips */}
          <UrgentCareList />
        </View>

        {/* Events Near You list (uses custom EventsNearYou list) */}
        <View>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Events Near You
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <EventsNearYou />
        </View>

        {/* Education from around campus list (uses custom EducationList list) */}
        <View>
          <Text
            style={{ marginTop: 30, left: 20, color: "#444444", fontSize: 15 }}
          >
            Education From Around Campus
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <EducationList />
        </View>

        {/* Explore topics list (uses custom ExploreTopicsList list) */}
        <SafeAreaView>
          <Text
            style={{ marginTop: 20, left: 20, color: "#444444", fontSize: 15 }}
          >
            Explore Topics
          </Text>
          {/* Our custom FlatList component for displaying events near you */}
          <ExploreTopicsList />
        </SafeAreaView>

        {/* Button to navigate to the events screen (TO BE UPDATED FOR SURE) */}

      </ScrollView>


      <View style={styles.bottom_bar}>
        {/* Robot button at bottom of screen to navigate to the chat bot */}
        <TouchableOpacity
          style={styles.bot_button}
          onPress={() => navigation.navigate("ChatBot")}
        >
          <Image source={require("../assets/robot.png")} />
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  events_button: {
    backgroundColor: "#e0ded7",
    borderRadius: 20,
    padding: 10,
    margin: 70,
    fontWeight: "bold",
    width: 145,
    justifyContent: "flex-end",
  },
  chatbutton: {
    height: 50,
    borderRadius: 30,
    borderTopRightRadius: 0,
    top: 15,
    right: 15,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: "center",

    position: "absolute",
    width: 90,
    backgroundColor: "white",
    alignSelf: "flex-end",
    zIndex: 3,
  },
  hamburgerwrapper: {
    paddingTop: 30,
    paddingLeft: 28,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    position: "absolute",

  },
  hamburger: {
    width: 25,
    height: 17,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  welcome_message: {
    position: "absolute",
    top: 81,
    left: 10,
    width: 284,
    fontSize: 22,
  },
  red_banner: {
    marginTop: 0,
    backgroundColor: "#FF7373",
    width: "100%",
    height: 25,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  health_bubble: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#605c6c",
    borderRadius: 50,
    margin: 5,
    padding: 6,
  },
});

export default HomeScreen;
