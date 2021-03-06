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

const HealthcareList = () => {
  const DATA = [
    {
      id: "10",
      title: "Women's Health",
      img: require("../assets/my-healthcare-list/womens-health.png"),
      url: "https://health.umd.edu/medical-behavioral-health/womens-health",
    },
    {
      id: "11",
      title: "On-Campus Pharmacy Services",
      img: require("../assets/my-healthcare-list/pharmacy.png"),
      url: "https://health.umd.edu/pharmacy",
    },
    {
      id: "12",
      title: "Primary Care Services",
      img: require("../assets/my-healthcare-list/primary-care.png"),
      url: "https://health.umd.edu/medical-behavioral-health/primary-care",
    },
    {
      id: "13",
      title: "Counseling Center Appointment",
      img: require("../assets/my-healthcare-list/counseling-center.png"),
      url: "https://www.counseling.umd.edu/",
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const Item = ({ title, img, url }) => (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={() => WebBrowser.openBrowserAsync(url)}
    >
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 100, width: 200 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} url={item.url} />
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
    width: 200,
    height: 200,
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

export default HealthcareList;
