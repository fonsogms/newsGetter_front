import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";
import { politicalButtons, politicalOptionBox, politicalText } from "./style";

const PoliticalComponent = (props) => {
  return (
    <View
      style={{
        ...politicalButtons.container,
      }}
    >
      <TouchableOpacity
        style={{
          ...politicalOptionBox.container,
          backgroundColor:
            props.politicalInclination == "Left" ? theme.yellow : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(props.PoliticalInclination.LEFT);
        }}
      >
        <Text
          style={{
            ...politicalText.container,
            color: theme.green,
          }}
        >
          Left
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...politicalOptionBox.container,
          backgroundColor:
            props.politicalInclination == "Center_left"
              ? theme.yellow
              : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(props.PoliticalInclination.CENTER_LEFT);
        }}
      >
        <Text style={{ ...politicalText.container, color: "#979494" }}>
          Center-Left
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...politicalOptionBox.container,
          backgroundColor:
            props.politicalInclination == "Center_right"
              ? theme.green
              : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(
            props.PoliticalInclination.CENTER_RIGHT
          );
        }}
      >
        <Text style={{ ...politicalText.container, color: "#979494" }}>
          Center-Right
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...politicalOptionBox.container,
          backgroundColor:
            props.politicalInclination == "Right" ? theme.green : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(props.PoliticalInclination.RIGHT);
        }}
      >
        <Text style={{ ...politicalText.container, color: theme.yellow }}>
          Right
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoliticalComponent;
