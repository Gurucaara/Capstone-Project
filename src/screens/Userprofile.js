import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Picker from "react-native-picker";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";
import { storeData } from "../uitl";
import DropDownPicker from "react-native-dropdown-picker";

export default function () {
  const [userName, setUserName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userLanguage, setUserLanguage] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!userName || !userCountry || !userLanguage || !userAge) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (isNaN(userAge)) {
      Alert.alert("Please enter a valid age");
      return;
    }
    setUserName("");
    setUserCountry("");
    setUserLanguage("");
    setUserAge("");
    alert("User data saved successfully");
    navigation.replace("tabs");

    storeData({
      userName,
      userCountry,
      userLanguage,
      userAge,
    });
  };

  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "ca" },
    { key: "2", value: "us" },
    { key: "3", value: "in" },
    { key: "4", value: "nz" },
    { key: "5", value: "au" },
    { key: "6", value: "ch" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setUserName}
        value={userName}
      />
      <Text style={styles.label}>Country:</Text>
      <SelectList
        setSelected={(val) => setUserCountry(val)}
        data={data}
        save="value"
      />
      <Text style={styles.label}>Language:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your preferred language"
        onChangeText={setUserLanguage}
        value={userLanguage}
      />
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={setUserAge}
        value={userAge}
        keyboardType="number-pad"
        maxLength={3}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    marginTop: 10,
    color: "#FFF",
    fontWeight: "bold",
  },
});
