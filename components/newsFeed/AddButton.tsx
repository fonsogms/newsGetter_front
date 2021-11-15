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
        width: 70,
        alignItems: "center",
        position: "absolute",
        bottom: screen.height * 0.15,
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
        Navigator.navigate("AddArticle", {});
      }}
    >
      <Ionicons
        name="md-add"
        size={60}
        style={{
          marginTop: 4,
          marginBottom: 6,
          marginRight: 6,
          width: 50,
          height: 50,
        }}
        color={"white"}
      ></Ionicons>
    </TouchableOpacity>
  );
};
