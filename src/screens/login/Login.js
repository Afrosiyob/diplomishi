import React from "react";
import {
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  ScrollView,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import TopHeader from "../../components/topHeader/TopHeader";
import * as Animatable from "react-native-animatable";
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
          onSubmit={(values) => {
            console.log(values);
            const formData = new FormData();

            formData.append("email", values.email);
            formData.append("password", values.password);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <View style={styles.box_one}>
                <Animatable.Image
                  animation="fadeInUp"
                  style={styles.box_one_image}
                  source={{
                    uri:
                      "https://www.click2sciencepd.org/sites/default/files/images/User-Icons-orange-2.png",
                  }}
                />
                <Animatable.Text
                  animation="fadeInUp"
                  style={styles.box_one_header}
                >
                  Shoppers 🛍️
                </Animatable.Text>
              </View>

              <Animatable.View animation="fadeInUp" style={styles.box_two}>
                <TextInput
                  style={styles.box_two_input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="email"
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <Text>{errors.email}</Text>
                ) : null}

                <TextInput
                  secureTextEntry={true}
                  style={styles.box_two_input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="password"
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <Text>{errors.password}</Text>
                ) : null}

                <Text style={{ alignSelf: "flex-end", color: "grey" }}>
                  Forgot password ?
                </Text>
              </Animatable.View>

              <Animatable.View animation="zoomIn">
                <TouchableOpacity
                  style={styles.custom_btn}
                  onPress={handleSubmit}
                >
                  <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box_one: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  box_one_header: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35,
    color: "orange",
  },
  box_one_sub_header: {
    color: "grey",
  },

  box_one_image: {
    width: 170,
    height: 170,
  },

  box_two: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  box_two_input: {
    marginVertical: 10,

    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    width: 250,
    borderWidth: 1.5,
    borderColor: "transparent",

    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 5.84,
    elevation: 5,
  },

  custom_btn: {
    alignSelf: "center",
    marginVertical: 20,
    width: 200,
    backgroundColor: "orange",
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 5.84,

    elevation: 5,
  },
});
