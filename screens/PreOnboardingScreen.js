import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const PreOnboardingScreen = ({ navigation }) => {
  const USER_DATA = [
    {
      id: 0,
      name: "Ellen",
    },
  ];

  return (
    <SafeAreaView style={{ flexDirection: "column", height: "100%",}}>

      <ScrollView style={styles.container} scrollEnabled={false}>
      <LinearGradient
    // Background Linear Gradient
    colors={['rgba(250,227,227,1)', 'rgba(253,247,234,1)']}
    style={styles.background}
  />

        <Text style={{top: 190, fontWeight: "600", paddingHorizontal: 20, fontSize: 26, textAlign: "center"}}>Before we begin, are you facing an emergency?</Text>

        <View style={{height: 55, width: 170, paddingVertical: 12, paddingHorizontal: 10, backgroundColor: "#EBA9A8", borderRadius: 100, borderWidth: 2, borderColor: "#D97470", position: "relative",top: 250, alignSelf: "center"}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Dashboard', {screen: 'Emergency'})}>
            <Text style={{fontSize: 11, color: "black", fontWeight: "bold", textAlign: "center",}}>YES, TAKE ME TO EMERGENCY SERVICES</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 55, width: 170, paddingVertical: 18, paddingHorizontal: 10, backgroundColor: "#D8ECB6", borderRadius: 100, borderWidth: 2, borderColor: "#95B798", position: "relative",top: 265, alignSelf: "center"}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Onboarding')}>
            <Text style={{fontSize: 11, color: "black", fontWeight: "bold", textAlign: "center",}}>NO, LET'S BEGIN</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: ScreenHeight,
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

export default PreOnboardingScreen;
