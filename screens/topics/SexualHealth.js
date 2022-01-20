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


const SexualScreen = ({ navigation }) => {
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
                <Text style={styles.boxed_content_text}>The Centers for Disease Control and Prevention (CDC) recommend that sexually active individuals be STI screened at least once a year or in between new partners.</Text>
              </View>
              <View style={styles.boxed_content}>
                <Text style={styles.boxed_content_text}>If you need assistance in finding the best method birth control method to fit your life and your needs, you can schedule a free consultation with the Sexual Health and Wellness coordinator on myUHC.</Text>
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
              <View style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/sexual-health")}>
                <Text style={styles.boxed_content_text} >The Sexual Health program provides sexual health supplies, peer education programs, free emergency contraception, and individual sexual health consultations.</Text>
              </View>
              <View style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/HormoneTherapy")}>
                <Text style={styles.boxed_content_text}>The UHC offers appointments for students seeking hormone initiation and management.</Text>
              </View>
              <View style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/womens-health")}>
                <Text style={styles.boxed_content_text}>Women's Health Services specializes in care for people with a uterus, vagina, or breasts, regardless of gender identity.</Text>
              </View>
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
              <TouchableOpacity style={styles.boxed_content} onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/hpws")}>
                <Text style={styles.boxed_content_text}>UMD Health Promotion and Wellness Services</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#F6A6A6" }}>
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title_text}>Sexual Health</Text>
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
              <Text style={styles.topic_text}>STI Testing</Text>
              <Text style={styles.detail_text}>The CDC recommends that sexually active individuals be STI screened at least once a year or in between new partners.</Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Birth Control</Text>
              <Text style={styles.detail_text}>For help selecting a birth control method, you can schedule a free consultation with the Sexual Health and Wellness coordinator on myUHC.
              </Text>
            </View>
            <View style={styles.common_topics}>
              <Text style={styles.topic_text}>Sexual Health Supplies</Text>
              <Text style={styles.detail_text}>The Health Promotion and Wellness Services front desk offers free condoms, insertive FC2 condoms, lubrication, safer sex kits and abstinence kits.

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
    backgroundColor: "#F6A6A6",
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

export default SexualScreen;
