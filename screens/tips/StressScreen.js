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

import ProfessionalList from "../../components/Anxiety/ProfessionalList.js";
import HomeList from "../../components/Anxiety/HomeList.js";

const StressScreen = ({ navigation }) => {
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
            style={{ left: 20, top: 20, color: "#000000", fontSize: 21, marginTop: 20, fontWeight: "600",}}
          >
            ANXIETY
          </Text>
          <Text
            style={{ left: 20, top: 30, marginBottom: 15, color: "#000000", fontSize: 15, fontWeight: "300", fontStyle: "italic",}}
          >
            As a college student, it is not uncommon to endure anxiety when it comes to issues with school, finances, or work. The UHC provides professional services for treating anxiety as well as tips on how to regulate your anxiety at home.          </Text>
        </View>


        <Text
          style={{ left: 15, top: 20, marginBottom: 10, color: "#000000", fontSize: 17, marginTop: 20, fontWeight: "500",}}
        >
          Where can I go for professional help?
        </Text>

        {/* Your Healthcare list (uses custom HealthcareList component) */}
        <View style={{ marginTop: 20 }}>

          <View style={{ backgroundColor: "#E6E6E6", paddingBottom: 20,  }}>
            {/* The little ovals above the list (see Figma) */}
            {/* TO BE DONE: CREATE INDIVIDUAL CLASS */}
            {/* Our custom FlatList component for displaying healthcare cards in a list */}
            <ProfessionalList />
          </View>
        </View>
        <Text
          style={{ left: 15, top: 20, marginBottom: 10, color: "#000000", fontSize: 17, marginTop: 20, fontWeight: "500",}}
        >
          How can I regulate my anxiety at home?
        </Text>

        <View style={{ marginVertical: 20 }}>

          <View style={{ backgroundColor: "#E6E6E6", paddingBottom: 20 }}>
            {/* The little ovals above the list (see Figma) */}
            {/* TO BE DONE: CREATE INDIVIDUAL CLASS */}
            {/* Our custom FlatList component for displaying healthcare cards in a list */}
            <HomeList />
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
});

export default StressScreen;
