import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";


const SafetyList = () => {
  const DATA = [
    {
      id: "10",
      title: "Mask-wearing",
      img: require("../../assets/generalhealthtips/covid-virus.png"),
      url: "https://umd.edu/4Maryland/health-plan#Masks"
    },
    {
      id: "11",
      title: "Vaccination Requirement",
      img: require("../../assets/generalhealthtips/covid-shield.png"),
      url: "https://umd.edu/4Maryland/health/covid-19-vaccine"
    },

  ];

  const Item = ({ title, img, url }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]} onPress={() => WebBrowser.openBrowserAsync(url)}>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 60, width: 60}}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} img={item.img} url={item.url}/>;

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
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 20,
    padding: 5,
    width: 180,
    height: 170,
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

export default SafetyList;
