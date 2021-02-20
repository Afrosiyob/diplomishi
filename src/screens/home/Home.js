import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Home(props) {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopHeader navigation={navigation} isHome={true} title="Shoppers" />

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>go to login</Text>
      </Pressable>

      <Text> this is home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
