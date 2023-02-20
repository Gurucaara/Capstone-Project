import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getData } from "../uitl";

export default function () {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        let response = JSON.parse(res);
        setUserData(response);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.data}>{userData.userName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Country:</Text>
        <Text style={styles.data}>{userData.userCountry}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Language:</Text>
        <Text style={styles.data}>{userData.userLanguage}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.data}>{userData.userAge}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  label: {
    flex: 2,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  data: {
    flex: 3,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "right",
  },
});
