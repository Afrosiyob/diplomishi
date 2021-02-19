import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Header(props) {
  const { navigation } = props;

  return (
    <View
      style={{
        height: 50,
        backgroundColor: "blue",
      }}
    >
      <Button
        onPress={() => navigation.openDrawer()}
        title="Go to notifications"
      />

      <Text>this is header</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
