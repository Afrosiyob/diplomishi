import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
export default function GeoMap() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 30,
        // marginBottom: 30,
        height: 300,
        // backgroundColor: "red",
      }}
    >
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        loadingEnable={true}
        showsCompass
      />
    </View>
  );
}

const styles = StyleSheet.create({});
