import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTab = (isOnline) => {
  return (
    <View style={styles.bottomContainer}>
      <Ionicons name={"options"} size={30} color={"#4a4a4a"} />
      {isOnline.isOnline ? (
        <Text style={styles.bottomText}> You are Online</Text>
      ) : (
        <Text style={styles.bottomText}> You are Offline</Text>
      )}
      <Ionicons name={"options"} size={30} color={"#4a4a4a"} />
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: "#4a4a4a",
  },
});
