import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const ProfessionalList = () => {
  const DATA = [
    {
      id: "10",
      title: "Behavioral Health Center",
      img: require("../../assets/generalhealthtips/anxiety-bhc.png"),
    },
    {
      id: "11",
      title: "Medication Management",
      img: require("../../assets/generalhealthtips/anxiety-medication.png"),
    },

  ];

  const Item = ({ title, img }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 70, width: 70 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} img={item.img} />;

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

export default ProfessionalList;
