import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const EventsNearYou = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: "0",

      title: "Neurobiology of Trauma and Healing",
      img: require("../assets/events-near-you/mental.png"),
      date: "12/07",
    },
    {
      id: "1",
      title: "Blood Drive",
      img: require("../assets/events-near-you/blood2.png"),
      date: "07/31",
    },
    {
      id: "2",
      title: "STI Testing",
      img: require("../assets/events-near-you/sti.png"),
      date: "06/20",
    },
  ];

  const NewEventButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Events")}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          More Events
        </Text>
      </TouchableOpacity>
    );
  };

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, img, date }) => (

    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
    <View style={{alignSelf: "center", top: 0,}}>
    <Text style={{paddingBottom: 0, alignSelf: "center", paddingBottom: 10,}}>{date}</Text>
</View>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 80, width: 200 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} date={item.date} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Events")} style={styles.footer_component}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "400",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          More Events
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
    width: 200,
    height: 200,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  events_button: {
    backgroundColor: "#e0ded7",
    borderRadius: 20,
    padding: 10,
    margin: 70,
    fontWeight: "bold",
    width: 145,
    justifyContent: "flex-end",
    flex: 1,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20,
    fontSize: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  footer_component: {
    backgroundColor: "#7d7d7d",
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
    height: 40,
    width: 138,
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default EventsNearYou;
