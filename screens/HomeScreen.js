import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from "react-native-maps-directions";
import Constants from "expo-constants";

const HomeScreen = () => {
  const origin = { latitude: 8.736937, longitude: 39.000699 };
  const destination = { latitude: 8.830403, longitude: 38.83231 };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        mapType="mutedStandard" //removes unnesscery details from map
        initialRegion={{
          latitude: 8.736937,
          longitude: 39.000699,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={Constants.manifest.extra.googleMapsApikey}
        />
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
