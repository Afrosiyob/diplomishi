import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TopHeader(props) {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable onPress={() => props.navigation.openDrawer()}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("../../../assets/icons8-menu-96.png")}
          />
        </Pressable>
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => props.navigation.navigate("Login")}
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            borderColor: "#f4511e",
            borderWidth: 2,
            padding: 2,
            paddingLeft: 10,
          }}
        >
          <Text
            style={{ color: "#f4511e", fontWeight: "bold", marginRight: 5 }}
          >
            Sign In
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("../../../assets/Login96.png")}
          />
        </Pressable>
        {/* <Pressable
          onPress={() => props.navigation.goBack()}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("../../../assets/icons8-u-turn-to-left-100.png")}
          />
        </Pressable> */}
        <Pressable
          onPress={() => props.navigation.navigate("Registration")}
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            borderColor: "#f4511e",
            borderWidth: 2,
            padding: 2,
            paddingLeft: 10,
          }}
        >
          <Text
            style={{ color: "#f4511e", fontWeight: "bold", marginRight: 5 }}
          >
            Sign Up
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("../../../assets/Login96.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
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
    color: "#f4511e",
    fontWeight: "bold",
    fontSize: 20,
  },
});
