import {
  Dimensions,
  Pressable,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Map from "../components/Map";
import BottomTab from "../components/BottomTab";
import tw from "twrnc";
import EarningDisplay from "../components/EarningDisplay";
import Entypo from "react-native-vector-icons/Entypo";

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

  const Buttons = () => {
    const ChangeStatus = () => {
      return (
        <View>
          <TouchableOpacity
            onPress={onGoPress}
            style={[
              tw`bg-cyan-500 hover:bg-cyan-600 absolute left-40 z-50 p-3 pt-3.5 w-16 h-15 rounded-full shadow-lg `,
              { top: Dimensions.get("window").height - 170 },
            ]}
          >
            {isOnline ? (
              <Text style={styles.endText}> End </Text>
            ) : (
              <Text style={styles.goText}> GO </Text>
            )}
          </TouchableOpacity>
        </View>
      );
    };

    const HelpButton = () => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={[
              tw`bg-gray-100 absolute top-160 left-8 z-50 p-3 rounded-full shadow-lg`,
              { top: Dimensions.get("window").height - 170 },
            ]}
          >
            <Entypo name={"menu"} size={24} color={"#4a4a4a"} />
          </TouchableOpacity>
        </View>
      );
    };

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

    const SearchButton = () => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={tw`bg-gray-100 absolute top-16 right-8 z-50 p-3 rounded-full shadow-lg`}
          >
            <Entypo name={"menu"} size={24} color={"#4a4a4a"} />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <MeanuButton />
        <SearchButton />
        <HelpButton />
        <MessageButton />
        <ChangeStatus />
        <EarningDisplay />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Buttons />
      <Map />
      <BottomTab isOnline={isOnline} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  goText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  endText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
