import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';


const UrgentCareList = () => {
  const DATA = [
    {
      id: "20",
      title: "Kaiser \nPermanente",
      url: "https://healthy.kaiserpermanente.org/maryland-virginia-washington-dc/facilities/Manassas-Medical-Center-Limited-Services-100409",
      img: require("../assets/urgent-cares/kaiser.png"),
      distance: 2.5,
    },
    {
      id: "22",
      title: "CVS MinuteClinic",
      url:"https://www.cvs.com/minuteclinic/clinic-locator/md/hyattsville/",
      img: require("../assets/urgent-cares/minute.png"),
      distance: 3.0,
    },
    {
      id: "24",
      title: "Adventist \nHealth Care",
      url:"https://www.adventisthealthcare.com/locations/profile/white-oak-medical-center/",
      img: require("../assets/urgent-cares/adventist.jpg"),
      distance: 2.8,
    },


  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, url, img, distance }) => (
    <View>
      <TouchableOpacity style={[styles.container,]}
      onPress={() => {WebBrowser.openBrowserAsync(url)}}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={img} resizeMode="contain" style={{width: 70,}}/>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ left: 160, marginTop: 5 }}>
        <Text>{distance} miles away</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} url={item.url} img={item.img} distance={item.distance} />
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
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    width: 250,
    height: 100,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "whtie",
  },
  text: {
    margin: 20,
    fontSize: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default UrgentCareList;
