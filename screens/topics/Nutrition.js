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

const NutritionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#95CCFF" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title_text}>Nutrition</Text>
      </View>
      <View
        style={{
          flex: 5,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            marginBottom: 5,
            color: "#000000",
            fontSize: 17,
            marginTop: 20,
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          Common Topics
        </Text>
        <View>
          {/* List under "Common Topics" */}
          <ScrollView
            style={{ flexDirection: "row", left: 8, marginTop: 5 }}
            horizontal={true}
          >
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Common Topic #1</Text>
              <Text style={styles.detail_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Common Topic #2</Text>
              <Text style={styles.detail_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Common Topic #3</Text>
              <Text style={styles.detail_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Text>
            </View>
          </ScrollView>

          {/* List under "Common Topics" */}
          <ScrollView
            style={{ flexDirection: "row", left: 8, marginTop: 10 }}
            horizontal={true}
          >
            <View style={styles.prevention}>
              <Text style={styles.subtopic_text}>Prevention</Text>
            </View>
            <View style={styles.subtopics}>
              <Text style={styles.subtopic_text}>University Services</Text>
            </View>
            <View style={styles.subtopics}>
              <Text style={styles.subtopic_text}>University Offices</Text>
            </View>
          </ScrollView>

          <ScrollView style={{ marginTop: 12 }}>
            <View style={styles.boxed_content}>
              <Text style={styles.boxed_content_text}>Lorem ipsum dolor?</Text>
            </View>
            <View style={styles.boxed_content}>
              <Text style={styles.boxed_content_text}>Lorem ipsum dolor?</Text>
            </View>
            <View style={styles.boxed_content}>
              <Text style={styles.boxed_content_text}>Lorem ipsum dolor?</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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

  title_text: {
    position: "absolute",
    top: 55,
    left: 0,
    width: "100%",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  topic_text: {
    fontWeight: "bold",
    margin: 2,
  },
  detail_text: {
    fontSize: 12,
    margin: 2,
  },

  common_topics: {
    margin: 10,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    height: 136,
    width: 188,
    justifyContent: "flex-end",
    padding: 12,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  subtopics: {
    margin: 10,
    borderRadius: 15,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    borderStyle: "solid",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  prevention: {
    margin: 10,
    borderRadius: 15,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    borderStyle: "solid",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#95CCFF",
  },
  subtopic_text: {
    fontWeight: "bold",
    margin: 2,
    fontSize: 15,
    letterSpacing: 1,
  },
  boxed_content: {
    margin: 10,
    borderRadius: 20,
    height: 115,
    backgroundColor: "#dedede",
    width: "90%",
    padding: 20,
    justifyContent: "flex-end",
  },
  boxed_content_text: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.75,
  },
});

export default NutritionScreen;
