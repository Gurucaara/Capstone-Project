import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import Userprofile from "./src/screens/Userprofile";

import Businessnews from "./src/tabs/Businessnews";
import Healthnews from "./src/tabs/Healthnews";
import Sportsnews from "./src/tabs/Sportsnews";
import Topnews from "./src/tabs/Topnews";
import Profile from "./src/tabs/Profile";

import { getData } from "./src/uitl";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Userprofile" component={Userprofile} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <>
      <StatusBar style="dark" />

      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <Tab.Screen
          name="Topnews"
          component={Topnews}
          options={{
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "black",
            title: "Top News",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="order-bool-ascending"
                color={"skyblue"}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Businessnews"
          component={Businessnews}
          options={{
            headerStyle: {
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            title: "Business",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="briefcase"
                color={"skyblue"}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Healthnews"
          component={Healthnews}
          options={{
            headerStyle: {
              backgroundColor: "gold",
            },
            headerTintColor: "black",
            title: "Health",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart"
                color={"skyblue"}
                size={30}
              />
            ),
            headerShown: true,
          }}
        />

        <Tab.Screen
          name="Sportsnews"
          component={Sportsnews}
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
            headerTintColor: "black",
            title: "Sports",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="run" color={"skyblue"} size={30} />
            ),
            headerShown: true,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: "aquamarine",
            },
            headerTintColor: "black",
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={"skyblue"}
                size={30}
              />
            ),
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [data, setData] = useState({});

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // }, []);

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        let response = JSON.parse(res);
        setData(response);
      }
    });
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <View style={{ flex: 1 }}>
      {/* // <View style={styles.container} onLayout={onLayoutRootView}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Userprofile"
            component={Userprofile}
            options={{
              headerStyle: {
                backgroundColor: "antiquewhite",
              },
              headerTintColor: "black",
              title: "Userprofile",
            }}
          />
          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}