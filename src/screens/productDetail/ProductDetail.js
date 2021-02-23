import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function ProductDetail(props) {
  const { navigation } = props;
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="Login" />
      <Text>this is product detail screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
