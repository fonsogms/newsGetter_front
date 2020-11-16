import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "./components/Logo";
import Index from "./components/index/Indice";
import { useFonts } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
import NewsList from "./components/newsFeed/NewsList";
import { navigationRef } from "./RouteNavigation";
const Routes = (props) => {
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({
    "Mohave-Medium": require("./assets/fonts/Mohave-Medium.otf"),
    "Mohave-Bold": require("./assets/fonts/Mohave-Bold.otf"),
    "Mohave-Regular": require("./assets/fonts/Mohave-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => <Logo></Logo>,
            title: "home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#48CFAD",
              height: 110,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              elevation: 100,
            },
          }}
        >
          {(routeProps) => (
            <Index
              {...routeProps}
              token={props.token}
              setToken={props.setToken}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="NewsFeed">
          {(routeProps) => <NewsList {...routeProps}></NewsList>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
