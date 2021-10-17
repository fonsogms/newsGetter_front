import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { buttonText, main, title } from "../globalStyles";
import { continueButton } from "./style";
import { url } from "../../globalVariables";
import axios from "axios";
import PoliticalComponent from "./PoliticalComponent";
import SelectCountry from "./SelectCountry";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { theme } from "../../theme";
const Registration2 = ({ route, navigation, setToken }) => {
  enum PoliticalInclination {
    LEFT = "Left",
    RIGHT = "Right",
    CENTER_RIGHT = "Center_right",
    CENTER_LEFT = "Center_left",
  }
  const [selectedLocations, setSelectedLocations] = useState({
    id: "",
    item: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [politicalInclination, setPoliticalInclination] =
    useState<PoliticalInclination | null>(null);
  const register = async () => {
    console.log("updated");
    try {
      console.log({
        username: route.params.username,
        password: route.params.password,
        politicalInclination: politicalInclination,
        country: selectedLocations.id,
      });
      const { data } = await axios.post<{ token: string }>(
        url + "/api/auth/signup",
        {
          username: route.params.username,
          password: route.params.password,
          politicalInclination: politicalInclination,
          country: selectedLocations.id,
        }
      );
      setToken(data.token);
      navigation.navigate("Newsfeed", {});

      setErrors([]);
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
            fontFamily: "Mohave-Bold",
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
            fontFamily: theme.green,
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
