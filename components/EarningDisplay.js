import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";

const EarningDisplay = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={tw`bg-cyan-500 hover:bg-cyan-600  absolute top-16 left-35 z-50 p-3 w-23 h-10 pt-2 pb-1 rounded-full shadow-lg`}
      >
        <Text style={styles.goText}>
          <Text style={{ color: "green" }}> $ </Text>
          0.00
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EarningDisplay;

const styles = StyleSheet.create({
  goText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
