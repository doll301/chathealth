import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Button,
  FlatList,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";




const OnboardingScreen = ({navigation}) => {
  return(
    <Onboarding
      onSkip={() => navigation.navigate("Dashboard")}
      showDone='false'

      pages={[

        {
          backgroundColor: '#F3F9F3',
          title: "Welcome to Chat Health.",
          titleStyles: {top: -260, fontWeight: "300"},
          image: <View><Image resizeMode="contain" source={require("../assets/demopic.png")} style={{position: "absolute", zIndex: 3, height: 280, left: -350,}}/><Image resizeMode="stretch" source={require("../assets/white-wave-full.png")} style={{alignSelf: "center", width: 2880, height: 300, bottom: -550, position: "absolute"}}/></View>,
          subTitleStyles: {top: -230, fontSize: 19, paddingHorizontal: 20, fontWeight: "300"},
          subtitle: "The first step to being the healthiest you. Personalized resources in your back pocket.",
        },
        {
          backgroundColor: '#F3F9F3',
          titleStyles: {top: -160, fontWeight: "300"},
          image: <Image source={require("../assets/robotidea.png")} resizeMode="contain" style={{position: "absolute", height: 150, left: 10, bottom: -350,}}/>,
          subTitleStyles: {top: -110, fontSize: 19, paddingHorizontal: 20, fontWeight: "300"},
          title: "What is Chat Health?",
          subtitle: "Chat Health is an app that effectively promotes your wellness on campus. \n\nYou will have access to relevant health information and connect with healthcare services on your university campus through empathetic health technology.",
        },
        {
          backgroundColor: '#F3F9F3',
          titleStyles: {top: 0, fontWeight: "300"},
          title: "What is preventative health?",
          subtitle: <View><Text style={{top: 0, fontSize: 19, paddingHorizontal: 30, paddingBottom: 20, fontWeight: "300", textAlign: "center", color: "#494a49"}}>Preventative health consists of taking protective measures and using trusted resources to keep healthy from illness. {'\n'}{'\n'}These core pillars of wellness help us promote preventative health:{'\n'}{'\n'}{'\n'}{'\n'}</Text>
          <View style={{left: 25, top: -60, paddingBottom: 30, flexDirection: "row",}}><Icon name="record" color={"#D8ECB6"} size={30} style={styles.shadowProp}/><View style={{left: 20, width: "70%",}}><Text style={{fontWeight: "300", textAlign: "left"}}>Emotional: keeping in control of your thoughts, feelings and behaviors.</Text></View></View>
          <View style={{left: 25, top: -60, paddingBottom: 30, flexDirection: "row",}}><Icon name="record" color={"#C886B1"} size={30} style={styles.shadowProp}/><View style={{left: 20, width: "70%",}}><Text style={{fontWeight: "300", textAlign: "left"}}>Physical: maintaining a healthy level of physical activity, diet, nutrition, sleep, and consumption of drugs/alcohol.</Text></View></View>
          <View style={{left: 25, top: -60, paddingBottom: 30, flexDirection: "row",}}><Icon name="record" color={"#A1CAFA"} size={30} style={styles.shadowProp}/><View style={{left: 20, width: "70%",}}><Text style={{fontWeight: "300", textAlign: "left"}}>Financial: being able to meet current and future financial obligations.</Text></View></View>
          <View style={{left: 25, top: -60, paddingBottom: 30, flexDirection: "row",}}><Icon name="record" color={"#9AABF9"} size={30} style={styles.shadowProp}/><View style={{left: 20, width: "70%",}}><Text style={{fontWeight: "300", textAlign: "left"}}>Social: the ability to form and maintain healthy interpersonal relationships with others.</Text></View></View>
          <View style={{left: 25, top: -60, paddingBottom: 30, flexDirection: "row",}}><Icon name="record" color={"#FBDC8E"} size={30} style={styles.shadowProp}/><View style={{left: 20, width: "70%",}}><Text style={{fontWeight: "300", textAlign: "left"}}>Professional: achieving a balance between work and leisure while promoting health and a sense of personal satisfaction.</Text></View></View>
          </View>,
        },
        {
          backgroundColor: '#F3F9F3',
          titleStyles: {top: -100, fontWeight: "300"},
          subTitleStyles: {top: -50, fontSize: 19, paddingHorizontal: 20, fontWeight: "300"},
          title: "How can Chat Health help you?",
          subtitle: <View>
                      <Text style={{top: -70, fontSize: 19, paddingHorizontal: 30, fontWeight: "300", textAlign: "center", color: "#494a49"}}>Chat Health provides you with accessible, on-campus resources aggregated onto a single platform.{'\n'}{'\n'}</Text>
                      <Text style={{top: -70, fontSize: 19, paddingHorizontal: 30, fontWeight: "500", textAlign: "center", color: "#494a49"}}>Your health is just as important as your education.</Text>

                        <TouchableOpacity style={{height: 55, width: 170, paddingVertical: 10, paddingHorizontal: 30, backgroundColor: "#D8ECB6", borderRadius: 100, borderWidth: 2, borderColor: "#95B798", alignSelf: "center", top: 10, justifyContent: "center"}} onPress={() => navigation.navigate('Dashboard')}>
                          <Text style={{fontSize: 11, color: "black", fontWeight: "bold", textAlign: "center",}}>START YOUR HEALTH JOURNEY</Text>
                        </TouchableOpacity>

                    </View>,
        },
  ]}
/>

  );
};


const styles = StyleSheet.create({

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .2,
    shadowRadius: 2,
  },

});
export default OnboardingScreen;
