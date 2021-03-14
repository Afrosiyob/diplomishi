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
  } );

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <TopHeader navigation={ navigation } isHome={ true } title="Shoppers" />
      <ScrollView style={ { padding: 10 } }>
        <Animatable.View animation="fadeInUp">
          <HeaderText />
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
          <HeaderText />

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
        <HeaderText title="map" subTitle="gogo map" />
        <GeoMap />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create( {} );
