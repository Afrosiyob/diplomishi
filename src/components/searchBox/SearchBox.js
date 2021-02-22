import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
export default function SearchBox() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={{ backgroundColor: "red" }}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
