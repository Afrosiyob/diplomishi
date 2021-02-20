import React from "react";

import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import Home from "../screens/home/Home";
import Registration from "../screens/registration/Registration";
import Login from "../screens/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList } from "@react-navigation/drawer";
import { View, Image, Text } from "react-native";
export default function AppNavigation() {
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props) {
    return (
      <View
        style={{
          paddingTop: 25,
          padding: 10,
          flex: 1,

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Side Bar Top Image */}
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../../assets/logo.png")}
            />
            <Text
              style={{
                marginBottom: 15,
                fontSize: 40,
                fontWeight: "bold",
                color: "#f4511e",
              }}
            >
              Shoppers
            </Text>
          </View>

          {/* SideBar Items */}

          <View>
            <DrawerItem
              labelStyle={{
                fontWeight: "bold",
                color: "#f4511e",
                textTransform: "uppercase",
              }}
              style={{
                borderColor: "transparent",
                borderBottomColor: "#f4511e",
                borderWidth: 0.5,
              }}
              label="login"
              onPress={() => props.navigation.navigate("Login")}
            />
            <DrawerItem
              labelStyle={{
                fontWeight: "bold",
                color: "#f4511e",
                textTransform: "uppercase",
              }}
              style={{
                borderColor: "transparent",
                borderBottomColor: "#f4511e",
                borderWidth: 0.5,
              }}
              label="Registration"
              onPress={() => props.navigation.navigate("Registration")}
            />
            <DrawerItem
              labelStyle={{
                fontWeight: "bold",
                color: "#f4511e",
                textTransform: "uppercase",
              }}
              style={{
                borderColor: "transparent",
                borderBottomColor: "#f4511e",
                borderWidth: 0.5,
              }}
              label="Home"
              onPress={() => props.navigation.navigate("Home")}
            />
          </View>

          {/* SideBar Footer */}
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#f4511e",
          }}
        >
          {" "}
          By Afrosiyob 🐝{" "}
        </Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registration} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
