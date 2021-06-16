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
export default function Home ( props ) {
  const { navigation } = props;

  useEffect( () => {
    SetToken();
  } );

  const [ state, setState ] = useState( {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Vелосипед 98 831,17 руб",
        text: "Электрический велосипед 1000W мужские горный велосипед амортизационная вилка для велосипеда складной электровелосипед MX01 Электрический велосипед для взрослых с толстыми покрышками Байк, способный преодолевать Броды 48V литиевая Батарея",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
      {
        title: "MBF 26 RAZMER ",
        text: "Новый Велосипед МБФ 26 размер 21 скорс багажли камплек фанар Насос замок сумка сув идиши алумин",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
      {
        title: "Прадаётся Велосипед Bars",
        text: "Прадаётся велосипед Барс 26 состояние как новый ездили мало качества хорошие ...",
        img_src: "../../../assets/ae9fa23b8b74f7539aaadc90782ca53e.jpg",
      },
    ],
  } );

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <TopHeader navigation={ navigation } isHome={ true } title="Shoppers" />
      <ScrollView style={ { padding: 10 } }>
        <Animatable.View animation="fadeInUp">
          <HeaderText title="Yangi qushilgan mahsulotlar" subTitle="Ohirgi haftada qushilgan zamonaviy mahsulotlar" />
        </Animatable.View>
        <View
          style={ {
            flexDirection: "row",
            paddingVertical: 16,
            flex: 1,
          } }
        >
          <Carousel
            layout={ "default" }
            data={ state.carouselItems }
            sliderWidth={ 300 }
            itemWidth={ 300 }
            renderItem={ CarouselItem }
            onSnapToItem={ ( index ) => setState( { ...state, activeIndex: index } ) }
          />
        </View>
        <View
          style={ {
            borderColor: "transparent",
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomColor: "lightgrey",
            borderWidth: 2,
          } }
        >
          <HeaderText
            title="Eng sara sotilgan mahsulotlar"
            subTitle="Bugungi kundagi ommabop bo'lgan mahsulotlar"
          />

          <View
            style={ {
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignContent: "center",
              alignItems: "center",
            } }
          >
            <View>
              <DropDown />
            </View>
          </View>
        </View>

        <View style={ { paddingBottom: 30 } }>
          <ProductCard key="1" navigation={ navigation } />
          <ProductCard key="2" navigation={ navigation } />
          <ProductCard key="3" navigation={ navigation } />
          <ProductCard key="4" navigation={ navigation } />
          <ProductCard key="5" navigation={ navigation } />
        </View>
        <HeaderText
          title="Yetkazib berish..."
          subTitle="Mahsulotingizni xaritadan kuzating..."
        />
        <GeoMap />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create( {} );
