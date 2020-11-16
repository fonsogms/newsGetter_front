import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import {
  inputBox,
  buttonText,
  inputsView,
  inputText,
  main,
  title,
} from "../globalStyles";
const items = [
  {
    id: "92iijs7yta",
    name: "Ondo",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Ogun",
  },
  {
    id: "16hbajsabsd",
    name: "Calabar",
  },
  {
    id: "nahs75a5sg",
    name: "Lagos",
  },
  {
    id: "667atsas",
    name: "Maiduguri",
  },
  {
    id: "hsyasajs",
    name: "Anambra",
  },
  {
    id: "djsjudksjd",
    name: "Benue",
  },
  {
    id: "sdhyaysdj",
    name: "Kaduna",
  },
  {
    id: "suudydjsjd",
    name: "Abuja",
  },
];

import { continueButton } from "./style";
const Registration2 = () => {
  const data = [
    { id: 1, label: "Money" },
    { id: 2, label: "Credit card" },
    { id: 3, label: "Debit card" },
    { id: 4, label: "Online payment" },
    { id: 5, label: "Bitcoin" },
  ];
  const onSelectedItemsChange = (selectedItems) => {};
  return (
    <View
      style={{
        ...main.container,
        justifyContent: "flex-start",
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          ...title.container,
          fontFamily: "Mohave-Bold",
          marginBottom: 20,
        }}
      >
        Registration
      </Text>

      <TouchableOpacity style={{ ...continueButton.container, width: 100 }}>
        <Text style={buttonText.container}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration2;
