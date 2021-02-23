import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderText() {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Best sell products
      </Text>
      <Text style={{ color: "grey", fontSize: 20 }}>Best sell products</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
