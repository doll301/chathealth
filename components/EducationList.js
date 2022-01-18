import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const EducationList = () => {
  const DATA = [
    {
      id: "0",
      title:
        "A Guide for Transgender, Non-Binary, and Gender Non-Conforming Terps",
      url: "https://health.umd.edu/sites/default/files/inline-files/Guide-links.pdf",
      group: "University Health Center",
      img: require("../assets/education-list/greenbackground.png"),
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#489c6c",
          padding: 7,
        },
        container_title: {
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "right",
          padding: 8,
          flexWrap: "wrap",
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
        imgstyle: {
          position: "absolute",
          right: 5,
          top: 10
        },
      }),
    },
    {
      id: "1",
      title: "Wellness Toolkit",
      url: "https://health.umd.edu/sites/default/files/inline-files/Wellness%20Toolkit%20_Revised%20October%202021%20%281%29_0.pdf",
      group: "University Health Center",
      img: require("../assets/education-list/orangebackground.png"),
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#DD6C48",
          padding: 8,
        },
        container_title: {
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "right",
          padding: 8,
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
        imgstyle: {
          position: "absolute",
          left: -10,
          top: 15,
          height: 130,
          width: 130,

        },
      }),
    },
    {
      id: "2",
      title: "Healthy Terps Newsletter: \nOctober",
      url: "https://www.canva.com/design/DAEJTllSHAk/XzAc21qN5xgoKeP7cgjhmA/view?utm_content=DAEJTllSHAk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#1",
      group: "Student Health Advisory Committee",
      img: require("../assets/education-list/bluebackground.png"),
      card_style: StyleSheet.create({
        container: {
          marginHorizontal: 10,
          marginBottom: 10,
          marginTop: 20,
          left: 8,
          width: 200,
          height: 170,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: "#F0F2F4",
          borderWidth: 1,
          backgroundColor: "#044468",
          padding: 8,
        },
        container_title: {
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
        },
        container_group: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 8,
        },
        text_title: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          flexWrap: "wrap",
        },
        text_group: {
          color: "white",
          flexWrap: "wrap",
          textAlign: "right",
        },
        imgstyle: {
          position: "absolute",
          right: 5,
          top: 10
        },
      }),
    },
  ];



  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, url, group, img, card_style}) => (
    <TouchableOpacity style={[card_style.container, styles.shadowProp]}
    onPress={() => {WebBrowser.openBrowserAsync(url)}}
    >
    <Image source={img} style={card_style.imgstyle} />
      <View style={card_style.container_title}>
        <Text style={card_style.text_title}>{title}</Text>
      </View>
      <View style={card_style.container_group}>
        <Text style={card_style.text_group}>{group}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} url={item.url} group={item.group} img={item.img} card_style={item.card_style} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    width: 172,
    height: 145,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default EducationList;
