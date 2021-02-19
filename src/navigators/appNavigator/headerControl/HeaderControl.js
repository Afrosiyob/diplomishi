import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
export default function HeaderControl(props) {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.row}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.loginBtn}>👉 Log In</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 15,
  },

  loginBtn: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#f4511e",
    padding: 5,
    borderRadius: 5,
  },

  centeredView: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
