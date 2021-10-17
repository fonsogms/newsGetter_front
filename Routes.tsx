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
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration/Registration2";
import ArticleWeb from "./components/newsFeed/ArticleWeb";

import { navBarStyles } from "./navbar.styles";
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
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {props.token ? (
          <>
            <Stack.Screen
              options={{
                ...navBarStyles(props.token, props.setToken, true),

                title: "Newsfeed",
              }}
              name="NewsFeed"
            >
              {(routeProps) => (
                <NewsList
                  {...routeProps}
                  token={props.token}
                  setToken={props.setToken}
                ></NewsList>
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                ...navBarStyles(props.token, props.setToken),
                title: "",
              }}
              name="ArticleWeb"
            >
              {(routeProps) => <ArticleWeb {...routeProps}></ArticleWeb>}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={navBarStyles(props.token, props.setToken)}
            >
              {(routeProps) => (
                <Index
                  {...routeProps}
                  token={props.token}
                  setToken={props.setToken}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                ...navBarStyles(props.token, props.setToken),
                title: "Registration",
              }}
              name="Registration"
            >
              {(routeProps) => <Registration {...routeProps}></Registration>}
            </Stack.Screen>
            <Stack.Screen
              options={{
                ...navBarStyles(props.token, props.setToken),
                title: "Registration2",
              }}
              name="Registration2"
            >
              {(routeProps) => (
                <Registration2
                  {...routeProps}
                  setToken={props.setToken}
                ></Registration2>
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// const navBarStyles = (token, setToken) => {
//   return {
//     headerTitle: () => <Logo></Logo>,
//     title: "Home",
//     headerBackTitleStyle: {
//       color: "white",
//       fontFamily: "Mohave-Medium",
//       fontSize: 20,
//     },

//     headerRight: () => {
//       if (token) {
//         return <Header token={token} setToken={setToken}></Header>;
//       }
//       return null;
//     },

//     headerTitleAlign: "center",
//     headerStyle: {
//       backgroundColor: "#48CFAD",
//       height: 110,
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowColor: "#000",
//       shadowOpacity: 0.5,
//       shadowRadius: 3.84,
//       elevation: 100,
//     },
//   };
// };
