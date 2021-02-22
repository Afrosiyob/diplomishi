import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";
import Carousel from "react-native-snap-carousel";
import ProductCard from "../../components/productCard/ProductCard";
import DropDown from "../../components/dropDown/DropDown";

export default function Home(props) {
  const { navigation } = props;

  const [state, setState] = useState({
    activeIndex: 0,
    carouselItems: [
      {
        title: "Item 1",
        text: "Text 1",
      },
      {
        title: "Item 2",
        text: "Text 2",
      },
      {
        title: "Item 3",
        text: "Text 3",
      },
      {
        title: "Item 4",
        text: "Text 4",
      },
      {
        title: "Item 5",
        text: "Text 5",
      },
    ],
  });

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 5,

          marginLeft: 25,
          marginRight: 25,
          flex: 1,
        }}
      >
        <Image
          style={{
            width: 240,
            height: 240,
            borderRadius: 5,
          }}
          source={require("../../../assets/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg")}
        />

        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopHeader navigation={navigation} isHome={true} title="Shoppers" />
      <ScrollView style={{ padding: 16 }}>
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Best sell products
          </Text>
          <Text style={{ color: "grey", fontSize: 20 }}>
            Best sell products
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 16,
            flex: 1,
          }}
        >
          <Carousel
            layout={"default"}
            data={state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem={(index) => setState({ ...state, activeIndex: index })}
          />
        </View>
        <View
          style={{
            borderColor: "transparent",
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomColor: "lightgrey",
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",

              color: "black",
            }}
          >
            Jordans for Mens
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "grey", fontSize: 20 }}>
              Best sell products
            </Text>
            <View>
              <DropDown />
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <ProductCard key="1" />
          <ProductCard key="2" />
          <ProductCard key="3" />
          <ProductCard key="4" />
          <ProductCard key="5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
