import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import TopHeader from "../../components/topHeader/TopHeader";

import { Formik } from "formik";
export default function Registration({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TopHeader navigation={navigation} isHome={false} title="Registration" />
      <ScrollView style={{ flex: 1 }}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            login: "",
            rePassword: "",
            phone: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={require("../../../assets/icons8-add-user-male-100.png")}
              />
              <TextInput
                style={styles.inputStyle}
                // keyboardType="numeric"
                onChangeText={handleChange("login")}
                onBlur={handleBlur("login")}
                value={values.login}
                placeholder="Enter your login"
              />

              <TextInput
                style={styles.inputStyle}
                // keyboardType="numeric"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Enter your email"
              />

              <TextInput
                style={styles.inputStyle}
                // keyboardType="numeric"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Enter Your password"
              />

              <TextInput
                style={styles.inputStyle}
                // keyboardType="numeric"
                onChangeText={handleChange("rePassword")}
                onBlur={handleBlur("rePassword")}
                value={values.rePassword}
                placeholder="Enter Your rePassword"
              />
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Enter Your phone"
              />

              <Pressable style={styles.btnStyle} onPress={handleSubmit}>
                <Text style={{ color: "white" }}> Registration </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "#f4511e",
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 250,
  },
  btnStyle: {
    width: 250,
    borderRadius: 20,
    backgroundColor: "#f4511e",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
