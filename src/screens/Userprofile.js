import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";
import { storeData } from "../uitl";

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
    { key: "1", value: "Canada" },
    { key: "2", value: "USA" },
    { key: "3", value: "India" },
    { key: "4", value: "Australia" },
  ];
  const languageData = [
    { key: "1", value: "English" },
    { key: "2", value: "French" },
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
        boxStyles={{
          width: 375,

          alignself: "center",
          paddingHorizontal: 10,
          borderColor: "white",
          marginTop: 10,
        }}
        dropdownStyles={{ height: 160 }}
      />
      <Text style={styles.label}>Language:</Text>
      <SelectList
        setSelected={(val) => setUserLanguage(val)}
        data={languageData}
        save="value"
        boxStyles={{
          width: 375,
          alignself: "center",
          paddingHorizontal: 10,
          borderColor: "white",
          marginTop: 10,
        }}
        dropdownStyles={{ height: 100 }}
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