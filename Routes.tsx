import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./components/index/Indice";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import NewsList from "./components/newsFeed/NewsList";
import { navigationRef } from "./RouteNavigation";
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration/Registration2";
import ArticleWeb from "./components/newsFeed/ArticleWeb";

import { useRootContext } from "./rootContext";
import AddArticle from "./components/AddArticle/AddArticle";
const Routes = (props) => {
  const { token, setToken } = useRootContext();
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
        {token ? (
          <>
            <Stack.Screen
              options={{
                title: "NewsFeed",
              }}
              name="NewsFeed"
            >
              {(routeProps) => (
                <NewsList
                  {...routeProps}
                  token={token}
                  setToken={setToken}
                ></NewsList>
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: "",
              }}
              name="ArticleWeb"
            >
              {(routeProps) => <ArticleWeb {...routeProps}></ArticleWeb>}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: "AddArticle",
              }}
              name="AddArticle"
            >
              {() => <AddArticle></AddArticle>}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Home">
              {(routeProps) => (
                <Index {...routeProps} token={token} setToken={setToken} />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: "Registration",
              }}
              name="Registration"
            >
              {(routeProps) => <Registration {...routeProps}></Registration>}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: "Registration2",
              }}
              name="Registration2"
            >
              {(routeProps) => (
                <Registration2
                  {...routeProps}
                  setToken={setToken}
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
