import React, { useState } from "react";
import { StyleSheet, Picker } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function DropDown() {
  const [selectedValue, setSelectedValue] = useState("java");
  console.log(selectedValue);

  return (
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
}

const styles = StyleSheet.create({});
