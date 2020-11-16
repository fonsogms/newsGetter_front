import React from "react";
import { View } from "react-native";
import { countries } from "../../countries";
import { Icon } from "react-native-elements";

import SelectBox from "react-native-multi-selectbox";
const SelectCountry = (props) => {
  return (
    <SelectBox
      label="Select the country"
      options={countries}
      inputPlaceholder={"Search country"}
      value={props.selectedLocations}
      onChange={(val) => props.setSelectedLocations(val)}
      selectIcon={
        <Icon name={"chevron-down"} type="evilicon" color="#48CFAD" />
      }
      hideInputFilter={false}
      containerStyle={{ margin: 10 }}
      labelStyle={{
        fontFamily: "Mohave-Medium",
        margin: 10,
      }}
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
  );
};

export default SelectCountry;
