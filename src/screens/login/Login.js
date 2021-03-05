import React from "react";
import { StyleSheet, View, ScrollView, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Login(props) {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TopHeader navigation={navigation} isHome={false} title="Login" />
      <ScrollView style={{ flex: 1 }}>
        <Formik
          initialValues={{ email: "", password: "" }}
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
                source={require("../../../assets/icons8-user-male-500.png")}
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

              <Button onPress={handleSubmit} title="Submit" />
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
});
