import React from "react";

import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import Home from "../screens/home/Home";
import Registration from "../screens/registration/Registration";
import Login from "../screens/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList } from "@react-navigation/drawer";
import { View, Image, Text, Settings, Pressable } from "react-native";
import Setting from "../screens/settings/Setting";
import Security from "../screens/security/Security";
import AllProducts from "../screens/allProducts/AllProducts";
import ProductDetail from "../screens/productDetail/ProductDetail";
export default function AppNavigation() {
  const Drawer = createDrawerNavigator();

  const driverData = [
    {
      label: "Home",
      navigate: "Home",
    },
    {
      label: "Security",
      navigate: "Security",
    },
    {
      label: "Login",
      navigate: "Login",
    },
    {
      label: "Registration",
      navigate: "Registration",
    },
    {
      label: "Setting",
      navigate: "Setting",
    },
    {
      label: "All products",
      navigate: "AllProducts",
    },
  ];
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
          <Pressable
            style={{ alignSelf: "flex-end" }}
            onPress={() => props.navigation.closeDrawer()}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/sidebar-left-100.png")}
            />
          </Pressable>

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

          <View>
            {driverData.map((item, index) => (
              <DrawerItem
                key={index}
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
                label={item.label}
                onPress={() => props.navigation.navigate(item.navigate)}
              />
            ))}
          </View>

          {/* SideBar Footer */}
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "grey",
          }}
        >
          {" "}
          By Afrosiyob 🐝 &#174; 2021{" "}
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Security" component={Security} />
        <Drawer.Screen name="AllProducts" component={AllProducts} />
        <Drawer.Screen name="ProductDetail" component={ProductDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
