import React from "react";
import { View } from "react-native";
import { countries } from "../../countries";
import { Icon } from "react-native-elements";

import SelectBox from "react-native-multi-selectbox";
import { theme } from "../../theme";
const SelectCountry = (props) => {
  return (
    <SelectBox
      label="Select the country"
      options={countries}
      inputPlaceholder={"Search country"}
      value={props.selectedLocations}
      onChange={(val) => props.setSelectedLocations(val)}
      selectIcon={
        <Icon name={"chevron-down"} type="evilicon" color={theme.green} />
      }
      hideInputFilter={false}
      containerStyle={{ margin: 10 }}
      labelStyle={{
        fontFamily: theme.mohave_medium,
        margin: 10,
      }}
      inputFilterContainerStyle={{
        fontFamily: theme.mohave_medium,
        margin: 10,
      }}
      inputFilterStyle={{ fontFamily: theme.mohave_medium }}
      optionsLabelStyle={{
        fontFamily: theme.mohave_medium,
      }}
      optionContainerStyle={{ fontFamily: theme.mohave_medium, margin: 10 }}
      multiOptionContainerStyle={{
        fontFamily: theme.mohave_medium,
        margin: 10,
      }}
      multiOptionsLabelStyle={{ fontFamily: theme.mohave_medium }}
      multiListEmptyLabelStyle={{ fontFamily: theme.mohave_medium }}
      listEmptyLabelStyle={{ fontFamily: theme.mohave_medium }}
      selectedItemStyle={{
        fontFamily: theme.mohave_medium,
      }}
    />
  );
};

export default SelectCountry;
