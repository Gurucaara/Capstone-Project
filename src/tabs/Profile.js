import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
      <Image style={styles.image} source={require("../Assets/user.png")} />
      <View style={styles.details}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
    marginBottom: 40,
  },
  details: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
    color: "#000",
    fontWeight: "bold",
  },
  data: {
    flex: 3,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    textAlign: "right",
  },
});