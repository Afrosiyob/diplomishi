import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";
import Carousel from "react-native-snap-carousel";
import ProductCard from "../../components/productCard/ProductCard";
import DropDown from "../../components/dropDown/DropDown";
import HeaderText from "../../components/headerText/HeaderText";
import CarouselItem from "../../components/carouselItem/CarouselItem";
import GeoMap from "../../components/geoMap/GeoMap";
import { SetToken } from "../../store/Token/SetToken";
import * as Animatable from "react-native-animatable";
export default function Home(props) {
  const { navigation } = props;

  useEffect(() => {
    SetToken();
  });

  const [state, setState] = useState({
    activeIndex: 0,
    carouselItems: [
      {
        title: "Vелосипед 98 831,17 руб",
        text: "Электрический велосипед 1000W мужские горный велосипед амортизационная вилка для велосипеда складной электровелосипед MX01 Электрический велосипед для взрослых с толстыми покрышками Байк, способный преодолевать Броды 48V литиевая Батарея",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
      {
        title: "USB флеш-накопитель 196,13 - 994,00 руб ",
        text: "USB флеш-накопитель TECHKEY, водонепроницаемый флеш-накопитель 64 ГБ 32 ГБ 16 ГБ 8 ГБ 4 ГБ, серебристая флешка, U-диск, подарок",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
      {
        title: "Item 3",
        text: "Text 3",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
    ],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopHeader navigation={navigation} isHome={true} title="Shoppers" />
      <ScrollView style={{ padding: 10 }}>
        <Animatable.View animation="fadeInUp">
          <HeaderText />
        </Animatable.View>
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
            renderItem={CarouselItem}
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
          <HeaderText />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <DropDown />
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <ProductCard key="1" navigation={navigation} />
          <ProductCard key="2" navigation={navigation} />
          <ProductCard key="3" navigation={navigation} />
          <ProductCard key="4" navigation={navigation} />
          <ProductCard key="5" navigation={navigation} />
        </View>
        <HeaderText title="map" subTitle="gogo map" />
        <GeoMap />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
