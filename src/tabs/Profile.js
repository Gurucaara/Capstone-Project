import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getData } from "../uitl";
import { SelectList } from "react-native-dropdown-select-list";

export default function () {
  const [userData, setUserData] = useState({});
  const [userCountry, setUserCountry] = useState("");
  const [userLanguage, setUserLanguage] = useState("");

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        let response = JSON.parse(res);
        setUserData(response);
      }
    });
  }, []);

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
      <Image style={styles.image} source={require("../Assets/user.png")} />
      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>{userData.userName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Country:</Text>
          <SelectList
            setSelected={(val) => setUserCountry(val)}
            data={data}
            save="value"
            placeholder={userData?.userCountry}
            boxStyles={{
              width: 100,

              alignself: "center",
              paddingHorizontal: 5,
              borderColor: "white",
              marginTop: 10,
            }}
            dropdownStyles={{ height: 160 }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Language:</Text>
          <SelectList
            setSelected={(val) => setUserLanguage(val)}
            placeholder={userData?.userLanguage}
            data={languageData}
            save="value"
            boxStyles={{
              width: 100,
              alignself: "center",
              paddingHorizontal: 5,
              borderColor: "white",
              marginTop: 10,
            }}
            dropdownStyles={{ height: 100 }}
          />
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
