import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";

import TipList from "../../components/TipList.js";
import HealthcareList from "../../components/HealthcareList.js";
import UrgentCareList from "../../components/UrgentCareList.js";
import EventsNearYou from "../../components/EventsNearYou.js";
import EducationList from "../../components/EducationList.js";
import ExploreTopicsList from "../../components/ExploreTopics.js";

const HomeScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <SafeAreaView style={{ flexDirection: "column" }}>
      <ScrollView style={styles.container}>
        {/* Stuff at the top wrapped in this View:
          blue swoosh; welcome message; emergency banner */}
        <View>
          {/* Blue swoosh at the top of the page */}
          <Image
            source={require("../../assets/grey-header.png")}
            resizeMode="stretch"
            style={{ width: "100%" }}
          />
          {/* Hamburger Menu */}
          <TouchableOpacity
            style={styles.hamburgerwrapper}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              source={require("../../assets/hamburger.png")}
              style={styles.hamburger}
            />
          </TouchableOpacity>

          {/* Welome message that uses the name of the user */}
          <Text style={styles.general_health_tips}>
            General Health Tips
          </Text>

          {/* Everything wrapped in this view is for the emergency banner at the top */}
          <View>
            <TouchableOpacity style={styles.blue_banner}>
              <Text
                style={{
                  color: "#5A5B68",
                  fontWeight: "medium",
                  fontSize: 14,
                  textDecorationLine: "underline",
                }}
              >
                Click the tiles below to learn more from UHC!
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* General Health Tips list (uses custom TipList component) */}
        <View style={{width: "85%"}}>
          <Text
            style={{ left: 20, top: 20, color: "#000000", fontSize: 21, marginTop: 20, fontWeight: "600"}}
          >
            SLEEP
          </Text>
          <Text
            style={{ left: 20, top: 30, color: "#000000", fontSize: 15, fontWeight: "300"}}
          >
          Sleep is critical to our mental-health, well-being, and every day functionality. The UHC provides several resources on how we can all work to improve our sleep habits along with professional resources to guide our wellness journey.
          </Text>
        </View>

        {/* Your Healthcare list (uses custom HealthcareList component) */}
        <View style={{ marginVertical: 20 }}>

          <View style={{ backgroundColor: "#E4F3FB", paddingBottom: 20 }}>
            {/* The little ovals above the list (see Figma) */}
            {/* TO BE DONE: CREATE INDIVIDUAL CLASS */}
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

        {/* Explore topics list (uses custom ExploreTopicsList list) */}

        {/* Button to navigate to the events screen (TO BE UPDATED FOR SURE) */}
      </ScrollView>
      <View style={styles.bottom_bar}>
        {/* Robot button at bottom of screen to navigate to the chat bot */}
        <TouchableOpacity
          style={styles.bot_button}
          onPress={() => navigation.navigate("ChatBot")}
        >
          <Image source={require("../../assets/robot.png")} />
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
  bottom_bar: {
    backgroundColor: "#5A5B68",
    position: "absolute",
    height: "9.5%",
    width: "100%",
    justifyContent: "flex-end",
    bottom: 0,
  },
  bot_button: {
    borderRadius: 20,
    padding: 15,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    position: "absolute",
  },
  hamburgerwrapper: {
    paddingTop: 45,
    paddingLeft: 23,
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
  general_health_tips: {
    position: "absolute",
    top: 40,
    left: 0,
    width: "100%",
    fontSize: 22,
    textAlign: "center",
  },
  blue_banner: {
    marginTop: 0,
    backgroundColor: "#CAE7F8",
    width: "100%",
    height: 30,
    padding: 3,
    alignItems: "center",
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
