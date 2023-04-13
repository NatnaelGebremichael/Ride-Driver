import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

const OrderPopUp = () => {
  return (
    <View style={styles.root}>
      <View style={styles.popupcontainer}>
        <View style={styles.row}>
          <Text style={styles.uberType}>UberX</Text>
          <Text style={styles.uberType} size={22}>
            <AntDesign name={"star"} size={18} />5
          </Text>
          <View style={styles.userBg}>
            <FontAwesome name={"user"} color={"ligtgrey"} size={35} />
          </View>
          <Text style={styles.minutes}> 2 min </Text>
          <Text style={styles.minutes}> 0.2 min </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderPopUp;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    height: 250,
  },
  popupcontainer: {
    backgroundColor: "black",
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  minutes: {
    color: "lightgrey",
    fontSize: 36,
  },
  distance: {
    color: "lightgrey",
    fontSize: 26,
  },
  uberType: {
    color: "lightgrey",
    fontSize: 20,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  userBg: {
    backgroundColor: "#008bff",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
});
