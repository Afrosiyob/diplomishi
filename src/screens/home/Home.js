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
          // backgroundColor: "orange",
          borderRadius: 5,
          // height: 250,

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
            // position: "absolute",
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
              // color: "rgb(32,162,125)",
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
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              // color: "rgb(32,162,125)",
              color: "black",
            }}
          >
            Jordans for Mens
          </Text>
          <Text style={{ color: "grey", fontSize: 20 }}>
            Best sell products
          </Text>
        </View>

        <View>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
        <Text style={{ fontSize: 50 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
