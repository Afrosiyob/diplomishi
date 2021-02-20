import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RightHeader(props) {
  return (
    <View style={styles.container}>
      <Text>Right header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    marginRight: 16,
  },
});
