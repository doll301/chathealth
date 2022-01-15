import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({navigation}) => {
  return(
    <Onboarding
      onSkip={() => navigation.navigate("Dashboard")}
      onDone={() => navigation.navigate("Dashboard")}

      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/robot.png')} />,
          title: "Welcome to Chat Health.",
          subtitle: "Select 'Next' to continue",
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/robot.png')} />,
          title: "Before we begin:",
          subtitle: "Just so you know, Chat Health is not a diagnostic tool and cannot repalce proper diagnosis by a medical professional.",
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/robot.png')} />,
          title: "Data and Privacy:",
          subtitle: "Before you fill out your profile, please be aware that all your data is kept confidential and anonymous. Your privacy is our priority.",
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/robot.png')} />,
          title: "You're all set!",
          subtitle: "Enter Chat Health.",
        },

  ]}
/>

  );
};
export default OnboardingScreen;
