import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Security ( props ) {
  const { navigation } = props;
  return (
    <View style={ { flex: 1 } }>
      <TopHeader navigation={ navigation } isHome={ false } title="Security" />

      <ScrollView style={ { flex: 1, paddingHorizontal: 50, paddingBottom: 20 } }>

        <View style={ styles.secImageView }>

          <Image
            style={ { width: 200, height: 200 } }
            source={ require( "../../../assets/Management_Security-512.png" ) }
          />

        </View>


        <View>
          <Text style={ styles.secTitle } >this is title </Text>
          <Text style={ styles.secSubTitle } >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati qui aliquid quam omnis, similique corrupti, eius neque iste aperiam impedit repellat laborum ad alias repudiandae minus cupiditate modi veniam. </Text>

        </View>

        <View style={ styles.secImageView }>

          <Image
            style={ { width: 200, height: 200, marginVertical: 20 } }
            source={ require( "../../../assets/9436596671553508656-512.png" ) }
          />

        </View>

        <View>
          <Text style={ styles.secTitle } >this is title </Text>
          <Text style={ styles.secSubTitle } >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati qui aliquid quam omnis, similique corrupti, eius neque iste aperiam impedit repellat laborum ad alias repudiandae minus cupiditate modi veniam. </Text>

        </View>

        <View style={ { marginBottom: 40 } }>
          <Text style={ styles.secTitle } >this is title </Text>
          <Text style={ styles.secSubTitle } >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati qui aliquid quam omnis, similique corrupti, eius neque iste aperiam impedit repellat laborum ad alias repudiandae minus cupiditate modi veniam. </Text>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create( {

  secImageView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20

  },

  secTitle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    color: 'grey',
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center"
  },

  secSubTitle: {
    color: "grey",
    textAlign: "center"
  }

} );
