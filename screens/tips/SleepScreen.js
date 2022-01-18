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

const SleepScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flexDirection: "column" }}>
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={require("../../assets/grey-header.png")}
            resizeMode="stretch"
            style={{ width: "100%" }}
          />
          <TouchableOpacity
            style={styles.backbuttonwrapper}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={styles.backbutton}>
              ◀︎ Home
              </Text>
          </TouchableOpacity>

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

        <View style={{width: "85%"}}>
          <Text
            style={{ left: 20, top: 20, color: "#000000", fontSize: 21, marginTop: 20, fontWeight: "600",}}
          >
            SLEEP
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

        <View style={{ marginTop: 20 }}>

          <View style={{ backgroundColor: "#E6E6E6", paddingBottom: 20,  }}>
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
  backbuttonwrapper: {
    marginTop: 20,
    marginLeft: 13,
    height: 24,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#7d7d7d",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "flex-start",
    position: "absolute",
  },
  backbutton: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 13,
  },

  general_health_tips: {
    position: "absolute",
    top: 55,
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

export default SleepScreen;
