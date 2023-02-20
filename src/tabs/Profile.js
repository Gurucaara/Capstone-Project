import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getData } from "../uitl";

export default function () {
  const [userData, setUserData] = useState({
    userName: "",
    userCountry: "",
    userLanguage: "",
    userAge: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.data}>{userData.userName}</Text>
      <Text style={styles.label}>Country:</Text>
      <Text style={styles.data}>{userData.userCountry}</Text>
      <Text style={styles.label}>Language:</Text>
      <Text style={styles.data}>{userData.userLanguage}</Text>
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.data}>{userData.userAge}</Text>
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
  data: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});
