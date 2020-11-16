import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
            props.politicalInclination == "Left" ? "#FFCE54" : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(props.PoliticalInclination.LEFT);
        }}
      >
        <Text
          style={{
            ...politicalText.container,
            color: "#48CFAD",
          }}
        >
          Left
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...politicalOptionBox.container,
          backgroundColor:
            props.politicalInclination == "Center_left" ? "#FFCE54" : "white",
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
            props.politicalInclination == "Center_right" ? "#48CFAD" : "white",
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
            props.politicalInclination == "Right" ? "#48CFAD" : "white",
        }}
        onPress={() => {
          props.setPoliticalInclination(props.PoliticalInclination.RIGHT);
        }}
      >
        <Text style={{ ...politicalText.container, color: "#FFCE54" }}>
          Right
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoliticalComponent;
