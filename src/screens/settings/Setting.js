import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Setting(props) {
  const { navigation } = props;

  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="Settings" />
      <Text>this is setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
