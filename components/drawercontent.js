import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";




export function DrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View styles={styles.DrawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Avatar.Image
                source={require("../assets/testudo.png")}
                size={72}
              />
              <View style={{ marginLeft: 13, flexDirection: "column" }}>
                <Title>Testudo Terrapin</Title>
                <Caption style={styles.caption}>University of Maryland</Caption>
                <Caption style={styles.profilebutton} onPress={() => navigation.navigate("Profile")}>View Profile</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="DASHBOARD"
              onPress={() => navigation.navigate("Home")}
              labelStyle={{
                fontWeight: "bold",
                color: "#474646",
                fontSize: "14",
              }}
            />
            <DrawerItem
              label="EVENTS"
              onPress={() => navigation.navigate("Events")}
              labelStyle={{
                fontWeight: "bold",
                color: "#474646",
                fontSize: "14",
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="HEALTH TOPICS"
              onPress={() => {}}
              labelStyle={{
                fontWeight: "bold",
                color: "#474646",
                fontSize: "14",
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#D2EDB0"} size={30} />
              )}
              label="Mental Health"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#95CCFF"} size={30} />
              )}
              label="Nutrition"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#FBDC8E"} size={30} />
              )}
              label="Primary Care"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#D382B3"} size={30} />
              )}
              label="Physical Health"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#F6A6A6"} size={30} />
              )}
              label="Sexual Health"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="record" color={"#FFE4D8"} size={30} />
              )}
              label="Urgent Care"
              onPress={() => {}}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem label="EVENTS" onPress={() => {}} />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar" color={"grey"} size={30} />
              )}
              label="Saved Events"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-marker" color={"grey"} size={30} />
              )}
              label="By Your School"
              onPress={() => {}}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="RESOURCES"
              onPress={() => {}}
              labelStyle={{
                fontWeight: "bold",
                color: "#474646",
                fontSize: "14",
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="shield-check-outline" color={"grey"} size={30} />
              )}
              label="What is HIPAA?"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard-list-outline" color={"grey"} size={30} />
              )}
              label="Insurance Checker"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="medical-bag" color={"grey"} size={30} />
              )}
              label="Health Hotlines"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.BottomDrawerSection}>
        <DrawerItem label="Logout" onPress={() => {}} />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },

  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  profilebutton: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 22,
  },


  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  boldtext: {
    fontWeight: "bold",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },

  drawerSection: {
    paddingTop: 0,
    backgroundColor: "white",
  },

  bottomDrawerSection: {
    padding: 0,
    margin: 0,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },

  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
