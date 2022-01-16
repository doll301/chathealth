import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {Avatar, Text} from "react-native-paper";


const ProfileScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <SafeAreaView style={{ flexDirection: "column", height: "100%",}}>
      <ScrollView style={styles.container} scrollEnabled={false}>

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

          <Text style={styles.profile}>
            Profile
          </Text>

          <View style={{ marginTop: 20, marginBottom: 30, alignSelf: "center", borderWidth: 10, borderColor: "#CBE3F9", borderRadius: 130, }}>
            <Avatar.Image
              source={require("../assets/testudo.png")}
              size={130}
              />
            </View>
          <View style={styles.row}>
            <Text style={styles.profileitem}>
            Name:
            </Text>
            <Text style={styles.profileentry}>
            Testudo Terrapin
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.profileitem}>
            Pronouns:
            </Text>
            <Text style={styles.profileentry}>
            they/them/theirs
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.profileitem}>
            University:
            </Text>
            <Text style={styles.profileentry}>
            University of Maryland
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.profileitem}>
            Language:
            </Text>
            <Text style={styles.profileentry}>
            English (US)
            </Text>
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,

  },
  hamburgerwrapper: {
    paddingTop: 25,
    paddingLeft: 23,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    position: "absolute",
  },
  hamburger: {
    width: 25,
    height: 17,
  },
  profile: {
    position: "relative",
    top: 50,
    height: 100,
    left: 0,
    width: "100%",
    fontSize: 22,
    textAlign: "center",
  },
  profileitem: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    left: 40,
  },
  profileentry: {
    fontSize: 17,
    fontWeight: "300",
    textAlign: "right",
    right: 40,

  },

});

export default ProfileScreen;
