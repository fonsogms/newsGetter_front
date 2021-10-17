import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MenuIcon = ({ onOpen }: { onOpen: Function }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onOpen();
      }}
    >
      <Ionicons name="ios-menu" size={29} color="white" />
    </TouchableOpacity>
  );
};

export default MenuIcon;
