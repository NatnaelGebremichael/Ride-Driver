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

const ChangeStatus = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[
          tw`bg-cyan-500 hover:bg-cyan-600 absolute left-40 z-50 p-3 pt-3.5 w-16 h-15 rounded-full shadow-lg `,
          { top: Dimensions.get("window").height - 170 },
        ]}
      >
        <Text style={styles.goText}> GO </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeStatus;

const styles = StyleSheet.create({
  goText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
