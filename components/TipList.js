import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TipList = () => {
  const TIP_DATA = [
    {
      id: "00",
      title: "Stress and Anxiety",
      link: "Stress",
    },
    {
      id: "01",
      title: "Sleep",
      link: "Sleep",
    },
    {
      id: "02",
      title: "COVID-19 Protocol",
      link: "COVIDProtocol",
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const navigation = useNavigation();

  const Item = ({ title, link }) => (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={() => navigation.navigate("Dashboard", { screen: link })}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} link={item.link} />;

  return (
    <SafeAreaView>
      <FlatList
        data={TIP_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    padding: 3,
    width: "auto",
    paddingHorizontal: 20,
    height: 50,
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
    margin: 0,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default TipList;
