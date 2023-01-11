import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";

const MeanuButton = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Entypo name={"menu"} size={24} color={"#4a4a4a"} />
      </TouchableOpacity>
    </View>
  );
};

export default MeanuButton;

const styles = StyleSheet.create({});
