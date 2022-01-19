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
                <Text style={styles.boxed_content_text}>If you’re looking for support with your diet and nutrition, the UHC Nutrition Service unit offers consultations with a registered dietitian for $20/session for students.</Text>
              </View>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>The CDC recommends at least 150 minutes of moderate aerobic physical activity or 75 minutes of vigorous physical activity, or an equivalent combination each week. UMD RecWell offers recreational services that can help you get started!</Text>
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
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/primary-care")}>
                <Text style={styles.boxed_content_text} >The Primary Care department offers general medical services including evaluation of non-emergency health conditions, routine physicals, and follow up appointments for chronic medical conditions.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/walk-services")}>
                <Text style={styles.boxed_content_text}>The Walk-In department treats urgent medical conditions including, but not limited to, asthma or trouble breathing, chest pain, allergic reaction, dehydration, high fever, UTI, and bone or joint injuries.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://recwell.umd.edu/facilities/facilities-0")}>
                <Text style={styles.boxed_content_text}>UMD RecWell offers recreational facilities available to students.</Text>
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
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/primary-care")}>
                <Text style={styles.boxed_content_text}>UMD Health Center</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://umterps.com/sports/2018/3/12/sports-medicine-services.aspx")}>
                <Text style={styles.boxed_content_text}>UMD Sports Medicine</Text>
              </TouchableOpacity>

        </ScrollView>
      </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#FBDC8E" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title_text}>Primary Care</Text>
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
              <Text style={styles.topic_text}>Nutrition</Text>
              <Text style={styles.detail_text}>The UHC Nutrition Service unit offers consultations with a registered dietitian for $20/session for students.</Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>UMD Sports Medicine</Text>
              <Text style={styles.detail_text}>Sports Medicine Services provides injury evaluation and treatment plans, weekly onsite clinics and game coverage for UMD intercollegiate athletes.

              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>RecWell</Text>
              <Text style={styles.detail_text}>If you’re looking to live a more active lifestyle, UMD RecWell offers recreational services that can help you get started!

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
    backgroundColor: "#FBDC8E",
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
