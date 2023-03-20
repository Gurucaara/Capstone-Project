import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import Userprofile from "./src/screens/Userprofile";
import Businessnews from "./src/tabs/Businessnews";
import Healthnews from "./src/tabs/Healthnews";
import Sportsnews from "./src/tabs/Sportsnews";
import Topnews from "./src/tabs/Topnews";
import Profile from "./src/tabs/Profile";
import { getData } from "./src/uitl";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            title: "Top News",
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("./src/Assets/newspaper-folded.png")}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Business"
          component={Businessnews}
          options={{
            headerStyle: {
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            // title: "Business",
            tabBarIcon: ({ color, size }) => (
              // <MaterialCommunityIcons
              //   name="git"
              //   color={"skyblue"}
              //   size={30}
              // />

              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("./src/Assets/briefcase.png")}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Health"
          component={Healthnews}
          options={{
            headerStyle: {
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            title: "Health",
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("./src/Assets/health-insurance.png")}
              />
            ),
            headerShown: true,
          }}
        />

        <Tab.Screen
          name="Sports"
          component={Sportsnews}
          options={{
            headerStyle: {
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            title: "Sports",
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("./src/Assets/volleyball.png")}
              />
            ),
            headerShown: true,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: "aqua",
            },
            headerTintColor: "black",
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("./src/Assets/user.png")}
              />
            ),
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        let response = JSON.parse(res);
        setData(response);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
