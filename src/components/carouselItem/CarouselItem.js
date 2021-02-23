import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CarouselItem({ item, index }) {
  return (
    <View
      style={{
        borderRadius: 5,
        marginLeft: 25,
        marginRight: 25,
        flex: 1,
      }}
    >
      <Image
        style={{
          width: 240,
          height: 240,
          borderRadius: 5,
        }}
        source={require("../../../assets/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg")}
      />

      <Text style={{ fontSize: 30 }}>{item.title}</Text>

      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
