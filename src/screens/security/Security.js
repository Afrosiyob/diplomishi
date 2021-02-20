import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Security(props) {
  const { navigation } = props;
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="Security" />
      <Text>this is Security screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
