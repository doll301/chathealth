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


const MentalScreen = ({ navigation }) => {
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
                <Text style={styles.boxed_content_text}>Being a college student can be stressful – consider self-care practices such as taking a walk outdoors, getting rest or taking a nap, meditation and breathing exercises, and relying on your support system. If you’re looking for additional support managing stress, check out the UMD Stress Management center for resources.</Text>
              </View>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>Meditation can be a useful antidote to stress and is often recommended as a supplemental resource for a number of health and wellness concerns. The UMD Health Center offers daily online group meditation sessions.</Text>
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
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/behavioral-health-emergencies")}>
                <Text style={styles.boxed_content_text} >The Mental Health Service offers brief, initial meetings to assess and stabilize students. Follow-up appointments or other recommendations may be made.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://www.counseling.umd.edu/")}>
                <Text style={styles.boxed_content_text}>The Counseling Center offers free and confidential counseling sessions to registered UMD undergraduate and graduate students.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => Linking.openURL(`tel:${+13013147651}`)}>
                <Text style={styles.boxed_content_text}>The Counseling Center offers an after-hours crisis support line at (301) 314-7651.</Text>
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
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/behavioral-health")}>
                <Text style={styles.boxed_content_text}>UMD Behavioral Health Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://www.counseling.umd.edu/")}>
                <Text style={styles.boxed_content_text}>UMD Counseling Center</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#D2EDB0" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title_text}>Emotional Health</Text>
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
              <Text style={styles.topic_text}>Managing Stress</Text>
              <Text style={styles.detail_text}>Being a college student can be stressful. Check out the UMD Stress Management center for resources and support for managing stress.</Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Meditation</Text>
              <Text style={styles.detail_text}>Meditation can be a useful antidote to stress and is often recommended as a supplemental resource for a number of health and wellness concerns.
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Counseling</Text>
              <Text style={styles.detail_text}>The Counseling Center offers free and confidential counseling sessions to registered UMD undergraduate and graduate students.

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
    backgroundColor: "#D2EDB0",
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

export default MentalScreen;
