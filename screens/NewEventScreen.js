import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

class NewEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      hostOrg: "",
      date: new Date(),
      startTime: "",
      endTime: "",
      location: "",
    };

    console.log(this.state.eventName);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Blue swoosh at the top of the page */}
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => this.props.navigation.navigate('Events')}>
          <Text style={styles.backbutton}>◀︎ Events</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/blue-wave.png")}
          resizeMode="stretch"
          style={{ width: "100%" }}
        />

        <Text style={styles.title}>Add New Event</Text>

        {/* Container for event name field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5, height: 15 }}>
            Event Name
          </Text>
          <TextInput
            style={{ flex: 3, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.eventName}
            onChangeText={(eventName) => {
              this.setState({ eventName });
            }}
          />
        </View>

        {/* Container for host organization field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>
            Host Organization
          </Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.hostOrg}
            onChangeText={(hostOrg) => {
              this.setState({ hostOrg });
            }}
          />
        </View>

        {/* Container for date field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>Date</Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.date}
            onChangeText={(date) => {
              this.setState({ date });
            }}
          />
        </View>

        {/* Container for time field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>Time</Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.startTime}
            onChangeText={(startTime) => {
              this.setState({ startTime });
            }}
          />
          <Text style={{ margin: 1 }}> to </Text>
          <TextInput
            style={{ flex: 1, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.endTime}
            onChangeText={(endTime) => {
              this.setState({ endTime });
            }}
          />
        </View>

        {/* Container for location field */}
        <View style={styles.fieldContainer}>
          <Text style={{ flex: 1, margin: 6, fontSize: 14.5 }}>Location</Text>
          <TextInput
            style={{ flex: 3, marginLeft: 2, backgroundColor: "#E0E4E7" }}
            value={this.state.location}
            onChangeText={(location) => {
              this.setState({ location });
            }}
          />
        </View>

        {/* This button currently does nothing (obvi) */}
        <TouchableOpacity
          style={{
            margin: 60,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 15,
              padding: 10,
              alignItems: "center",
            }}
          >
            Submit for Review
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  backbuttonwrapper: {
    marginTop: 35,
    marginLeft: 13,
    height: 24,
    width: 84,
    borderRadius: 40,
    backgroundColor: "#7d7d7d",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 2,
  },
  backbutton: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 13,
  },


  /* Container to be used to keep label and text input in horizontal line */
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 19,
  },

  /* Same as fieldContainer for now but Ellen created this cause it may end up needing
     to be a bit different from the other fields :) RAWR XD */
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },

  title: {
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: 25,
    paddingLeft: 100,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },
});

export default NewEventScreen;
