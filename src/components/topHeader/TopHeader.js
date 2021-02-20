import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TopHeader(props) {
  return (
    <View style={styles.container}>
      {props.isHome ? null : (
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("../../../assets/icons8-left-90.png")}
          />
        </Pressable>
      )}
      <Text style={styles.textTitle}>{props.title}</Text>
      <Pressable onPress={() => props.navigation.openDrawer()}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/dot-menu-vertical-100.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f4511e",
    height: 70,
    paddingTop: 22,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },
  textTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
