import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  const state = useNavigationState((state) => state);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons name="ios-arrow-back" size={29} color="white" />
    </TouchableOpacity>
  );
};

export default BackButton;
