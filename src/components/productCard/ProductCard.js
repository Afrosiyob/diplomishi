import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
export default function ProductCard() {
  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 130, height: 130, borderRadius: 5, marginRight: 10 }}
        source={require("../../../assets/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg")}
      />
      <View style={styles.rightBox}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          Air Jordan 1 Retro High OG Snakeskin CD0461-601 | Pochta
        </Text>
        <View
          style={{
            flex: 1,
            paddingVertical: 0,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontStyle: "italic",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            {" "}
            45.5 ${" "}
          </Text>
          <AirbnbRating
            size={20}
            // reviews={false}
            starContainerStyle={{ padding: 0 }}
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    borderColor: "transparent",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: "lightgrey",
    borderWidth: 2,
  },
  rightBox: {
    flex: 1,
  },
});
