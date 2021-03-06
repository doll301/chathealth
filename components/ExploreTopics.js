import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VirtualizedList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";



const ExploreTopicsList = () => {
  const DATA = [
    {
      id: 0,
      borderTopRight: 0,
      title: "Sexual Health",
      description:
        "is your reproductive system healthy and are you having positive sexual experiences?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#F6A6A6",
          width: "12%",
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 1,
      title: "Mental Health",
      description: "are you having issues with how you think, feel or act?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#D2EDB0",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 2,
      title: "Physical Health",
      description: "are you having issues with how your body feels?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#D382B3",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 3,
      title: "Nutrition",
      description: "are you eating and drinking well?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#95CCFF",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 4,
      title: "Primary Care",
      description: "when was the last time you got a basic checkup?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#FBDC8E",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
    {
      id: 5,
      title: "Urgent Care",
      description: "do you think you need urgent medical attention?",
      card_style: StyleSheet.create({
        color_block: {
          backgroundColor: "#FFE4D8",
          width: 48,
          height: "100%",
          borderColor: "#F0F2F4",
          borderStyle: "solid",
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
          flex: 1,
        },
      }),
    },
  ];
  const navigation = useNavigation();

  return (

    <View style={{ paddingBottom: 340 }}>
      {/* Sexual Health card */}
      <TouchableOpacity style={[styles.container, styles.container1]} onPress={() => navigation.navigate("Topic", { screen: "SexualHealth" })}>
        <View style={styles.container_text}>
          <Text style={styles.text_details}>{DATA[0].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Mental Health card */}
      <TouchableOpacity style={[styles.container, styles.container2]} onPress={() => navigation.navigate("Topic", {screen: "Mental"})}>
        <View style={styles.container_text}>
          <Text style={styles.text_details}>{DATA[1].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Physical Health card */}
      <TouchableOpacity style={[styles.container, styles.container3]} onPress={() => navigation.navigate("Topic", { screen: "PhysicalHealth" })}>
        <View style={styles.container_text}>
          <Text style={styles.text_details}>{DATA[2].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Nutrition card */}
      <TouchableOpacity style={[styles.container, styles.container4]} onPress={() => navigation.navigate("Topic", { screen: "Nutrition" })}>
        <View style={styles.container_text}>
          <Text style={styles.text_details}>{DATA[3].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Primary care card */}
      <TouchableOpacity style={[styles.container, styles.container5]} onPress={() => navigation.navigate("Topic", { screen: "PrimaryCare" })}>
        <View style={styles.container_text}>
          <Text style={styles.text_details_alternative}>
            {DATA[4].description}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Urgent care card */}
      <TouchableOpacity style={[styles.container, styles.container6]} onPress={() => navigation.navigate("Topic", { screen: "UrgentCare" })}>
        <View style={styles.container_text}>
          <Text style={styles.text_details_alternative}>
            {DATA[5].description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 13,
    marginVertical: 10,
    width: "88%",
    height: "9.25%",
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F0F2F4",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  container1: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 40,
    width: "70%",
    backgroundColor: "#F6A6A6",
  },
  container2: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 0,
    width: "70%",
    alignSelf: "flex-end",
    backgroundColor: "#5CA67F",
  },
  container3: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 40,
    width: "70%",
    backgroundColor: "#D382B3",
  },
  container4: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 0,
    width: "70%",
    alignSelf: "flex-end",
    backgroundColor: "#95CCFF",
  },
  container5: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: "70%",
    backgroundColor: "#FBDC8E",
  },
  container6: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 0,
    width: "70%",
    alignSelf: "flex-end",
    backgroundColor: "#FFE4D8",
  },
  container_text: {
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text_title: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 5,
  },
  /* For first four "Topics" bubbles to be white*/
  text_details: {
    flexWrap: "wrap",
    color: "white",
    marginBottom: 3,
    marginRight: 20,
    textAlign: "center",
  },
  /* For last two "Topics" bubbles to be grey */
  text_details_alternative: {
    flexWrap: "wrap",
    color: "grey",
    marginBottom: 3,
    marginRight: 20,
    textAlign: "center",
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default ExploreTopicsList;
