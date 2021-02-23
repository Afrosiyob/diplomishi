import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
export default function SearchBox() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ product: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              borderColor: "#f4511e",
              borderWidth: 2,
              padding: 5,
              borderRadius: 40,
            }}
          >
            <TextInput
              placeholder="enter element"
              style={{ flex: 1, padding: 5, fontSize: 20 }}
              onChangeText={handleChange("product")}
              onBlur={handleBlur("product")}
              value={values.product}
            />

            <Pressable onPress={handleSubmit}>
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={require("../../../assets/icons8-search-500.png")}
              />
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
