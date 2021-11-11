import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MenuIcon = ({ onOpen }: { onOpen: Function }) => {
  return (
    <View
      style={{
        flex: 0.33,
      }}
    >
      <TouchableOpacity
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          onOpen();
        }}
      >
        <Ionicons name="md-menu" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuIcon;
