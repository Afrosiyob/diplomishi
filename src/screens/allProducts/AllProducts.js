import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../../components/searchBox/SearchBox";
import TopHeader from "../../components/topHeader/TopHeader";

export default function AllProducts(props) {
  const { navigation } = props;
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="All products" />
      <SearchBox />
      <Text>this is all products</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
