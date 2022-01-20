import React, { useState, useEffect }  from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Linking,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';


const NutritionScreen = ({ navigation }) => {
  const [view, setView] = useState("B");

  const PreventionContent = () => (
    <View>
    <ScrollView
      style={{ flexDirection: "row", left: 8, marginTop: 10 }}
      horizontal={true}
    >
      <TouchableOpacity style={styles.highlight} onPress={() => setView("A")}>
        <Text style={styles.subtopic_text}>Prevention</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subtopics} onPress={() => setView("B")}>
        <Text style={styles.subtopic_text}>University Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subtopics}>
        <Text style={styles.subtopic_text} onPress={() => setView("C")}>University Offices</Text>
      </TouchableOpacity>
    </ScrollView>

    <ScrollView style={{ marginTop: 12 }}>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>A good diet includes a variety of foods from the major food groups and can support good physical and mental health. The major food groups are grains, proteins, dairy, fruits, and vegetables.</Text>
              </View>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>Unhealthy eating in college can lead to lower grades, illness, fatigue, and other adverse side effects. One way to eat healthier in college, as well as save money, is to plan out meals and prepare healthy meals in bulk early in the week.</Text>
              </View>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>Your body needs to be hydrated to function at its best. Some ways to ensure that you’re hydrated is to bring a water bottle along with you everywhere and to eat water-rich foods like fruits and vegetables. </Text>
              </View>
        </ScrollView>
      </View>
  );
  const ServicesContent = () => (
    <View>
    <ScrollView
      style={{ flexDirection: "row", left: 8, marginTop: 10 }}
      horizontal={true}
    >
    <TouchableOpacity style={styles.highlight} onPress={() => setView("B")}>
      <Text style={styles.subtopic_text}>University Services</Text>
    </TouchableOpacity>

      <TouchableOpacity style={styles.subtopics} onPress={() => setView("A")}>
        <Text style={styles.subtopic_text}>Prevention</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subtopics}>
        <Text style={styles.subtopic_text} onPress={() => setView("C")}>University Offices</Text>
      </TouchableOpacity>
    </ScrollView>

    <ScrollView style={{ marginTop: 12}}>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/nutrition-services")}>
                <Text style={styles.boxed_content_text} >The UHC Nutrition Service unit offers consultation with a registered dietitian for $20/session for students and $55/session for faculty and staff. The Nutrition Service also offers nutrition coaching from undergraduate dietetic students through the Peer Nutrition Coaching Service.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/eating-disorders")}>
                <Text style={styles.boxed_content_text}>The University Health Center offers support for students struggling with eating concerns, body image, and/or excessive exercise. </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("hhttps://health.umd.edu/medical-behavioral-health/allergy-clinic")}>
                <Text style={styles.boxed_content_text}>The Allergy Clinic administers allergy injections to students under the direction of their allergist or another physician.</Text>
              </TouchableOpacity>
  </ScrollView>
      </View>
  );
  const OfficesContent = () => (
    <View>
    <ScrollView
      style={{ flexDirection: "row", left: 8, marginTop: 10 }}
      horizontal={true}
    >
    <TouchableOpacity style={styles.highlight}>
      <Text style={styles.subtopic_text} onPress={() => setView("C")}>University Offices</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.subtopics} onPress={() => setView("A")}>
        <Text style={styles.subtopic_text}>Prevention</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subtopics} onPress={() => setView("B")}>
        <Text style={styles.subtopic_text}>University Services</Text>
      </TouchableOpacity>
    </ScrollView>

    <ScrollView style={{ marginTop: 12 }}>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/nutrition-services")}>
                <Text style={styles.boxed_content_text}>UMD Nutrition Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/eating-disorders")}>
                <Text style={styles.boxed_content_text}>UMD Behavioral Health Services – Eating Disorders</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#95CCFF" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title_text}>Nutritional Health</Text>
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
              <Text style={styles.topic_text}>Balanced Diet</Text>
              <Text style={styles.detail_text}>A good diet includes a variety of foods from the major food groups – grains, proteins, dairy, fruits, and vegetables. 
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Hydration</Text>
              <Text style={styles.detail_text}>Your body needs to be hydrated to function at its best. Bring a water bottle along with you everywhere and eat water-rich foods like fruits and vegetables.
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Eating Disorders</Text>
              <Text style={styles.detail_text}>The University Health Center offers support for students struggling with eating concerns, body image, and/or excessive exercise.
              </Text>
            </View>
          </ScrollView>


          <View>
              {view === "A" ?
                <PreventionContent />
              : null}

              {view === "B" ?
              <ServicesContent />
              : null}

              {view === "C" ?
              <OfficesContent />
              : null}
          </View>
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
    justifyContent: "space-between",
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
  highlight: {
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
    margin: 5,
    paddingTop: 25,
    paddingBottom: 15,
    borderRadius: 20,
    height: "auto",
    backgroundColor: "#dedede",
    width: "95%",
    paddingHorizontal: 15,
    justifyContent: "flex-end",
  },
  boxed_content_text: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.75,
  },
});

export default NutritionScreen;
