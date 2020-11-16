import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { xorBy } from "lodash";
import { Icon } from "react-native-elements";
import {
  inputBox,
  buttonText,
  inputsView,
  inputText,
  main,
  title,
} from "../globalStyles";
import SelectBox from "react-native-multi-selectbox";
import {
  continueButton,
  politicalButtons,
  politicalOptionBox,
  politicalText,
} from "./style";
import { countries } from "../../countries";

const Registration2 = () => {
  enum PoliticalInclination {
    LEFT = "Left",
    RIGHT = "Right",
    CENTER_RIGHT = "Center_right",
    CENTER_LEFT = "Center_left",
  }
  const [selectedLocations, setSelectedLocations] = useState({});
  console.log(selectedLocations);

  const [
    politicalInclination,
    setPoliticalInclination,
  ] = useState<PoliticalInclination | null>(null);
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
      <SelectBox
        label="Select single"
        options={countries}
        inputPlaceholder={"Search country"}
        value={selectedLocations}
        onChange={(val) => setSelectedLocations(val)}
        selectIcon={
          <Icon name={"chevron-down"} type="evilicon" color="#48CFAD" />
        }
        hideInputFilter={false}
        containerStyle={{ margin: 10 }}
        labelStyle={{ fontFamily: "Mohave-Medium", margin: 10 }}
        inputFilterContainerStyle={{ fontFamily: "Mohave-Medium", margin: 10 }}
        inputFilterStyle={{ fontFamily: "Mohave-Medium" }}
        optionsLabelStyle={{
          fontFamily: "Mohave-Medium",
        }}
        optionContainerStyle={{ fontFamily: "Mohave-Medium", margin: 10 }}
        multiOptionContainerStyle={{ fontFamily: "Mohave-Medium", margin: 10 }}
        multiOptionsLabelStyle={{ fontFamily: "Mohave-Medium" }}
        multiListEmptyLabelStyle={{ fontFamily: "Mohave-Medium" }}
        listEmptyLabelStyle={{ fontFamily: "Mohave-Medium" }}
        selectedItemStyle={{
          fontFamily: "Mohave-Medium",
        }}
      />
      <View
        style={{
          ...politicalButtons.container,
        }}
      >
        <TouchableOpacity
          style={{
            ...politicalOptionBox.container,
            backgroundColor:
              politicalInclination == "Left" ? "#FFCE54" : "white",
          }}
          onPress={() => {
            setPoliticalInclination(PoliticalInclination.LEFT);
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
              politicalInclination == "Center_left" ? "#FFCE54" : "white",
          }}
          onPress={() => {
            setPoliticalInclination(PoliticalInclination.CENTER_LEFT);
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
              politicalInclination == "Center_right" ? "#48CFAD" : "white",
          }}
          onPress={() => {
            setPoliticalInclination(PoliticalInclination.CENTER_RIGHT);
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
              politicalInclination == "Right" ? "#48CFAD" : "white",
          }}
          onPress={() => {
            setPoliticalInclination(PoliticalInclination.RIGHT);
          }}
        >
          <Text style={{ ...politicalText.container, color: "#FFCE54" }}>
            Right
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ ...continueButton.container, width: 100 }}>
        <Text style={buttonText.container}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration2;
