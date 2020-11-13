import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "./components/Logo";
import Index from "./components/index/Indice";
import { useFonts } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
export default function App() {
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
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => <Logo></Logo>,
            title: "home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#48CFAD",
              height: 100,
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
          component={Index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
