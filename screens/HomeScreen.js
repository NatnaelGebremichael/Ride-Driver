import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Map from "../components/Map";
import BottomTab from "../components/BottomTab";
import Buttons from "../components/Buttons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Buttons />
      <Map />
      <BottomTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
