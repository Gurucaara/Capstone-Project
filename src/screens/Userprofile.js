import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";

export default function () {
  const [userName, setUserName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userLanguage, setUserLanguage] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!userName || !userCountry || !userLanguage || !userAge) {
      Alert.alert("Error", "All fields are required");
    } else {
      setUserName("");
      setUserCountry("");
      setUserLanguage("");
      setUserAge("");
      alert("User data saved successfully");
    }
  };

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
      <TextInput
        style={styles.input}
        placeholder="Enter your country"
        onChangeText={setUserCountry}
        value={userCountry}
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
    width: "100%",
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
