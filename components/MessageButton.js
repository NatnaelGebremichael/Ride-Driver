import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";

const MessageButton = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[
          tw`bg-gray-100 absolute top-160 right-8 z-50 p-3 rounded-full shadow-lg`,
          { top: Dimensions.get("window").height - 170 },
        ]}
      >
        <Entypo name={"menu"} size={24} color={"#4a4a4a"} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageButton;

const styles = StyleSheet.create({});
