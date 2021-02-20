import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Registration({ navigation }) {
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="Registration" />
      <Text>this is registration</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
