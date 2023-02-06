import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userData", jsonValue);
  } catch (e) {
    console.log("error", e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("userData");
    if (value !== null) {
      console.log("value----->>>>", JSON.parse(value));
      return value;
    }
  } catch (e) {
    // error reading value
    console.log("error", e);
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
  } catch (e) {
    // remove error
    console.log("error", e);
  }
};
