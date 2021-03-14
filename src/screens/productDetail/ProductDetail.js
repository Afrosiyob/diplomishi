import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CarouselItem from "../../components/carouselItem/CarouselItem";
import Carousel from "react-native-snap-carousel";
import TopHeader from "../../components/topHeader/TopHeader";
import HeaderText from "../../components/headerText/HeaderText";
import ProductIno from "../../components/productInfo/ProductIno";

export default function ProductDetail ( props ) {
  const { navigation } = props;
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
    <View style={ { flex: 1 } }>
      <TopHeader navigation={ navigation } isHome={ false } title="Login" />
      {/* <Text>this is product detail screen</Text> */ }
      <ScrollView style={ { flex: 1, padding: 10 } }>
        <View >

          <HeaderText />
          <View style={ {
            flexDirection: "row",
            paddingVertical: 16,
            flex: 1,
          } }>
            <Carousel
              layout={ "default" }
              data={ state.carouselItems }
              sliderWidth={ 300 }
              itemWidth={ 300 }

              renderItem={ CarouselItem }
              onSnapToItem={ ( index ) => setState( { ...state, activeIndex: index } ) }
            />
          </View>


          <HeaderText />

          <ProductIno />


          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
          <Text>wefew</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create( {} );
