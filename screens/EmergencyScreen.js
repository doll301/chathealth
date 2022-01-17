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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const EmergencyScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <SafeAreaView style={{ flexDirection: "column", height: "100%",}}>
      <ScrollView style={styles.container} scrollEnabled={false}>

      <TouchableOpacity
        style={styles.backbuttonwrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={styles.backbutton}>
          ◀︎ Home
          </Text>
      </TouchableOpacity>


          <Text style={styles.header}>
            Are you currently experiencing an emergency?
          </Text>

          <View style={styles.rowwhite}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            General Emergency
            </Text>
            <Text style={styles.entrysubtitle}>
            911
            </Text>
            </View>
          </View>

          <View style={styles.rowblue}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            UMPD Emergency Line
            </Text>
            <Text style={styles.entrysubtitle}>
            UMD Campus Police Department
            </Text>
            </View>
          </View>

          <View style={styles.rowwhite}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            COVID Hotline
            </Text>
            <Text style={styles.entrysubtitle}>
            UMD Campus HEAL
            </Text>
            </View>
          </View>

          <View style={styles.rowblue}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            Suicide Hotline
            </Text>
            <Text style={styles.entrysubtitle}>
            National Suicide Prevention Line
            </Text>
            </View>
          </View>


          <View style={styles.rowwhite}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            Nurse line
            </Text>
            <Text style={styles.entrysubtitle}>
            UMD Campus Nurse Line
            </Text>
            </View>
          </View>

          <View style={styles.rowblue}>
            <View style={styles.phonebox}>
            <Icon name="phone" color={"#4a4a4a"} size={30} style={{margin: 10,}}/>
            </View>
            <View style={styles.entry}>
            <Text style={styles.entrytitle}>
            CARE Crisis Line
            </Text>
            <Text style={styles.entrysubtitle}>
            CARE line
            </Text>
            </View>
          </View>




      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4F3FB",
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

  phonebox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#CAE7F8",
    top: 5,
    bottom: 5,
    left: 15,
    marginRight: 30,
  },

  header: {
    fontWeight: "500",
    marginBottom: 35,
    marginTop: 65,
    fontSize: 20,
    textAlign: "center"

  },
  entry: {
    paddingVertical: 5,
  },
  entrytitle: {
    fontWeight: "500",
    fontSize: 20,
  },
  entrysubtitle: {
    fontWeight: "300",
    fontSize: 13,
    top: 4,
  },


  rowwhite: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingVertical: 10,

    borderRadius: 10,
    width: 330,
    height: 80,
    backgroundColor: "red",
    alignSelf: "center",
    backgroundColor: "#fff",

  },
  rowblue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingVertical: 10,

    borderRadius: 10,
    width: 330,
    height: 80,
    backgroundColor: "red",
    alignSelf: "center",
    backgroundColor: "#E4F3FB",

  },


});

export default EmergencyScreen;
