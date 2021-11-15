import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonText, main, title } from "../globalStyles";
import { continueButton } from "./style";
import PoliticalComponent from "./PoliticalComponent";
import SelectCountry from "./SelectCountry";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { theme } from "../../theme";
import { apiService } from "../../services/apiService";
export enum PoliticalInclination {
  LEFT = "Left",
  RIGHT = "Right",
  CENTER_RIGHT = "Center_right",
  CENTER_LEFT = "Center_left",
}
const Registration2 = ({ route, navigation, setToken }) => {
  const [selectedLocations, setSelectedLocations] = useState({
    id: "",
    item: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [politicalInclination, setPoliticalInclination] =
    useState<PoliticalInclination | null>(null);
  const register = async () => {
    try {
      const data = await apiService.register(
        route.params.username,
        route.params.password,
        politicalInclination,
        selectedLocations.id
      );
      setToken(data.token);
      navigation.navigate("NewsFeed", {});
    } catch (err) {
      if (typeof err.response.data.message == "string")
        setErrors([err.response.data.message]);
      else setErrors([...err.response.data.message]);
    }
  };
  return (
    <View>
      <NavbarHeader></NavbarHeader>
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
            fontFamily: theme.mohave_Bold,
            marginBottom: 20,
          }}
        >
          Registration
        </Text>
        <SelectCountry
          setSelectedLocations={setSelectedLocations}
          selectedLocations={selectedLocations}
        ></SelectCountry>
        <Text
          style={{
            ...title.container,
            margin: 30,
          }}
        >
          Political orientation
        </Text>
        <PoliticalComponent
          politicalInclination={politicalInclination}
          setPoliticalInclination={setPoliticalInclination}
          PoliticalInclination={PoliticalInclination}
        ></PoliticalComponent>
        <TouchableOpacity
          style={{ ...continueButton.container, width: 100 }}
          onPress={() => {
            register();
          }}
        >
          <Text style={buttonText.container}>Register</Text>
        </TouchableOpacity>
        {errors &&
          errors.map((elem) => {
            return (
              <Text
                style={{
                  ...title.container,
                  color: "red",
                  fontSize: 20,
                  margin: 5,
                }}
              >
                {elem[0].toLocaleUpperCase() + elem.slice(1)}
              </Text>
            );
          })}
      </View>
    </View>
  );
};

export default Registration2;
