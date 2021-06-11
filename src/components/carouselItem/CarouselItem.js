import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CarouselItem({ item, index }) {
  return (
    <View
      style={{
        borderRadius: 5,
        // marginLeft: 25,
        // marginRight: 25,
        flex: 1,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: 300,
          height: 300,
          borderRadius: 5,
        }}
        source={require("../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg")}
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
