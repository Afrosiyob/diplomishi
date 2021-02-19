import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function LogoTitle() {
  return (
    <View style={styles.row}>
      <Image
        style={styles.logoImage}
        source={{
          uri:
            "http://cabinet.shoppers.uz/static/media/logodashboard.ef812ee0.png",
        }}
      />
      <Text style={styles.title}>Be Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 150,
  },

  logoImage: {
    width: 35,
    height: 45,
  },

  title: {
    color: "#f4511e",
    fontWeight: "bold",
    fontSize: 25,
  },
});
