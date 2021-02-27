import { AsyncStorage } from "react-native";

export const SetToken = async () => {
  try {
    await AsyncStorage.setItem("token", "this is token key");
    console.log("success");
  } catch (error) {
    console.log("Error in saving Storage");
  }
};
