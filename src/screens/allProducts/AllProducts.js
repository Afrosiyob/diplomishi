import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderText from "../../components/headerText/HeaderText";
import ProductCard from "../../components/productCard/ProductCard";
import SearchBox from "../../components/searchBox/SearchBox";
import TopHeader from "../../components/topHeader/TopHeader";

export default function AllProducts(props) {
  const { navigation } = props;
  return (
    <View>
      <TopHeader navigation={navigation} isHome={false} title="All products" />

      <ScrollView style={{ padding: 16 }}>
        <HeaderText />
        <View style={{ flex: 1, marginVertical: 16 }}>
          <SearchBox />
        </View>
        <View style={{ paddingBottom: 30 }}>
          <ProductCard key="1" />
          <ProductCard key="2" />
          <ProductCard key="3" />
          <ProductCard key="4" />
          <ProductCard key="5" />
          <ProductCard key="6" />
          <ProductCard key="7" />
          <ProductCard key="8" />
          <ProductCard key="9" />
          <ProductCard key="10" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
