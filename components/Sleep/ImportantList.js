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

const ImportantList = () => {
  const DATA = [
    {
      id: "10",
      title: "Sleep is crucial to our well-being.",
      img: require("../../assets/generalhealthtips/sleep-bed.png"),
    },
    {
      id: "11",
      title: "Sleep reduces stress.",
      img: require("../../assets/generalhealthtips/sleep-storm.png"),
    },
    {
      id: "12",
      title: "Sleep regulates your moods.",
      img: require("../../assets/generalhealthtips/sleep-mood.png"),
    },


  ];

  const Item = ({ title, img }) => (
    <View style={[styles.container, styles.shadowProp]}>
      <Image
        source={img}
        style={{ resizeMode: "contain", height: 60, width: 60}}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
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
    backgroundColor: "#eeeeee",
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

export default ImportantList;
