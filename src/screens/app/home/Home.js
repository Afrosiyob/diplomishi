import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../../navigators/appNavigator/header/Header";

export default function Home(props) {
  const { navigation } = props;
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64,
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#f4511e" />
      <Text>this is home screen hello afrosiyob</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

      <Text style={{ fontSize: 80 }}>React Native</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
});
