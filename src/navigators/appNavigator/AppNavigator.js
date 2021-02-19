import React from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/app/home/Home";
import SignIn from "../../screens/app/signIn/SignIn";
import SignUp from "../../screens/app/signUp/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import LogoTitle from "./logoTitle/LogoTitle";

export default function AppNavigator() {
  const CustomOptions = (title) => ({
    title: title,
  });

  function CustomDrawerContent(props) {
    return (
      // <DrawerContentScrollView {...props} style={{ padding: 20 }}>

      // </DrawerContentScrollView>
      <View style={{ flex: 1, justifyContent: "space-between", padding: 10 }}>
        <View style={{ marginTop: 50 }}>
          <LogoTitle />
          {/* <DrawerItemList {...props} /> */}
        </View>
        <View>
          <Button
            title="Close "
            onPress={() => {
              props.navigation.closeDrawer();
            }}
          />
          <Pressable onPress={props.navigation.navigate("SignIn")}>
            <Text>I'm pressable!</Text>
          </Pressable>
          <Pressable onPress={props.navigation.closeDrawer()}>
            <Text>I'm pressable!</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: "white",
        }}
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: "orange",
          itemStyle: { marginVertical: 10 },
        }}
        options={{ title: "My home" }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={CustomOptions("home screen")}
        />
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={CustomOptions("sign in")}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={CustomOptions("sign up")}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
