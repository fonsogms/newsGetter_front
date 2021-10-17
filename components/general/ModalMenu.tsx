import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RouteNavigation";

const ModalMenu = (props) => {
  const logout = async () => {
    console.warn("happens");
    await AsyncStorage.setItem("token", "");
    props.setToken("");
    RootNavigation.navigate("Home", {});
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={{ backgroundColor: "red" }}
      >
        <Text>Logout!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalMenu;
