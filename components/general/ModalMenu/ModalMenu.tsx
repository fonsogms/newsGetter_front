import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../RouteNavigation";
import { ModalStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../theme";

const ModalMenu = (props) => {
  const logout = async () => {
    await AsyncStorage.setItem("token", "");
    props.setToken("");
    RootNavigation.navigate("Home", {});
  };
  return (
    <View style={ModalStyles.mainView}>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={ModalStyles.logoutTouchable}
      >
        <Ionicons name="ios-log-out" size={30} color={theme.green} />
        <Text style={ModalStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: theme.yellow,
          width: "80%",
          height: 2,
          marginTop: 5,
        }}
      ></View>
    </View>
  );
};

export default ModalMenu;
