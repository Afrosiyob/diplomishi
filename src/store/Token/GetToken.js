import { AsyncStorage } from "react-native";

export const GetToken = async () => {
  try {
    return await AsyncStorage.GetItem("token", "this is token key");
  } catch (error) {
    console.log("Error in Fetching Storage");
  }
};
