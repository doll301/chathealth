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
      link: "HealthTips",
    },
    {
      id: "02",
      title: "Cold, Flu, Sore Throat",
      link: "HealthTips",
    },
    {
      id: "03",
      title: "Vaccination",
      link: "HealthTips",
    },
    {
      id: "04",
      title: "Sexual Health",
      link: "HealthTips",
    },
  ];

  /* Simply renders a pressable component with the title displayed */
  const navigation = useNavigation();

  const Item = ({ title, link }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}  onPress={() => navigation.navigate("Dashboard", {screen: "Stress"})}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      <FlatList
        data={TIP_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
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
    padding: 10,
    width: 150,
    height: 100,
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

export default TipList;
