import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  const state = useNavigationState((state) => state);
  return (
    <View style={{ flex: 0.33 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-chevron-back-outline" size={29} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
