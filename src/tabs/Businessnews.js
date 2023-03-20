import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  FlatList,
  Box,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";
import { services } from "../../services/services";
import moment from "moment";
import { getData } from "../uitl";
//import axios from 'axios';
export default function () {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        let response = JSON.parse(res);
        services(
          "Business",
          response.userCountry.toLocaleLowerCase().substring(0, 2)
        )
          .then((data) => {
            setNewsData(data);
          })
          .catch((error) => {
            console.log("try again: ", error);
          });
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Business</Text>
      </View>

      {newsData.length > 1 ? (
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
            <Box
              _text={{ fontWeight: "bold", color: "rgb(0,208,255)" }}
              px="5"
              py="2"
              rounded="md"
              my="0.4"
              bg="rgba(1,1,1,0.9)"
            >
              <Image
                height={300}
                width={3000}
                resizeMode={"contain"}
                // borderRadius={100}
                source={{
                  uri: item.urlToImage
                    ? item.urlToImage
                    : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
                }}
                alt="article image"
              />
              {item.title}
              <Text style={styles.publish}>
                {moment(item.publishedAt).format("LLL")}
              </Text>

              <Text style={styles.newsDescipt}>{item.description}</Text>
            </Box>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.Spinner}>
          <Spinner color="black" />
        </View>
      )}

      {/* <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <Box
            _text={{ fontWeight: "bold", color: "rgb(0,208,255)" }}
            px="5"
            py="2"
            rounded="md"
            my="0.4"
            bg="rgba(1,1,1,0.9)"
          >
            <Image
              height={200}
              width={300}
              resizeMode={"contain"}
              borderRadius={100}
              source={{
                uri: item.urlToImage
                  ? item.urlToImage
                  : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
              }}
              alt="article image"
            />
            {item.title}
            <Text style={styles.publish}>
              {moment(item.publishedAt).format("LLL")}
            </Text>

            <Text style={styles.newsDescipt}>{item.description}</Text>
          </Box>
        )}
      /> */}
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(1,1,1,0.9))",
    border: "#f7f500",
  },
  text: {
    fontSize: 24,
    color: "#20B2AA",

    textShadow: "rgb(0,208,255) 2px 3px 0px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  description: {
    padding: 20,
  },
  newsDescipt: {
    color: "#00FF00",
    marginTop: 10,
  },
  publish: {
    color: "white",
  },
});
