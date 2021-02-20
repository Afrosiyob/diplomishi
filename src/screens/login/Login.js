import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Login(props) {
  const { navigation } = props;
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="Login" />
      <Text>this is login screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
