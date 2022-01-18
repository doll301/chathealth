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

const MentalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "20%", backgroundColor: "D2EDB0" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.general_health_tips}>Mental Health</Text>

        {/* Everything wrapped in this view is for the emergency banner at the top */}
      </View>

      <Text
        style={{
          left: 15,
          top: 20,
          marginBottom: 10,
          color: "#000000",
          fontSize: 17,
          marginTop: 20,
          fontWeight: "500",
        }}
      >
        Common Topics
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
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

export default MentalScreen;
