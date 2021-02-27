import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderText({
  title = "Best take home products",
  subTitle = "Best take home products",
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "black",
        }}
      >
        {title}
      </Text>
      <Text style={{ color: "grey", fontSize: 20 }}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
