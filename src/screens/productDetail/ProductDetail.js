import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CarouselItem from "../../components/carouselItem/CarouselItem";
import Carousel from "react-native-snap-carousel";
import TopHeader from "../../components/topHeader/TopHeader";
import HeaderText from "../../components/headerText/HeaderText";
import ProductIno from "../../components/productInfo/ProductIno";

export default function ProductDetail(props) {
  const { navigation } = props;
  const [state, setState] = useState({
    activeIndex: 0,
    carouselItems: [
      {
        title: "Немецкий велосипед",
        text: "Немецкий дизайн. -Самые надёжные семискоростные (7 shift) планетарные втулки Shimano Nexus7. Не требуют постоянных настроек и обслуживания;",
      },
      {
        title: "MBF 26 RAZMER ",
        text: "Новый Велосипед МБФ 26 размер 21 скорс багажли камплек фанар Насос замок сумка сув идиши алумин",
      },
      {
        title: "Прадаётся Велосипед Bars",
        text: "Прадаётся велосипед Барс 26 состояние как новый ездили мало качества хорошие ...",
      },
      {
        title: "Велосипед для девочки",
        text: "Велосипед для девочки на возраст с 4 х лет . Б.У. торг уместен звоните или пишите в тг.",
      },
    ],
  });
  return (
    <View style={{ flex: 1 }}>
      <TopHeader navigation={navigation} isHome={false} title="Login" />
      {/* <Text>this is product detail screen</Text> */}
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View>
          <HeaderText
            title="Велосипед Ташкент: купить велосипед"
            subTitle="Велосипеды Ташкент - покупка и продажа велосипедов на доске объявлений"
          />
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
              onSnapToItem={(index) =>
                setState({ ...state, activeIndex: index })
              }
            />
          </View>

          <HeaderText
            title="Велосипеды в Ташкенте - купить, узнать цены, посмотреть..."
            subTitle="Велосипеды в Ташкенте - купить очень просто на Glotr.uz! Велосипеды в Ташкенте - все цены, фото, отзывы на нашем сайте."
          />

          <ProductIno />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
