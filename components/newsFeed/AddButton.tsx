import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { screen } from "../../globalVariables";
import { TouchableOpacity } from "react-native";
import * as Navigator from "../../RouteNavigation";
export const AddButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        position: "absolute",
        bottom: screen.height * 0.3,
        right: screen.width * 0.05,
        height: 70,
        backgroundColor: theme.green,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
      }}
      onPress={() => {
        Navigator.navigate("AddUser", {});
      }}
    >
      <Ionicons name="ios-add" size={55} color={"white"}></Ionicons>
    </TouchableOpacity>
  );
};
