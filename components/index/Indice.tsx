import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import axios, { AxiosError } from "axios";
import { url } from "../../globalVariables";
import { loginButton, createAccountText, links } from "./styles";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {
  buttonText,
  inputBox,
  inputsView,
  inputText,
  main,
  title,
} from "../globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
const Indice = (props) => {
  const [errors, setErrors] = useState<string[]>([]);

  const [username, setUsername] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");

  const onSubmit = async (): Promise<void> => {
    console.log(username, password);
    try {
      const { data } = await axios.post<{ token: string }>(
        url + "/api/auth/signin",
        {
          username,
          password,
        }
      );
      await AsyncStorage.setItem("token", data.token);
      props.setToken(data.token);

      setErrors([]);
    } catch (err) {
      console.log(err);
      if (err.response.data.message) {
        console.log(typeof err.response.data.message);

        if (typeof err.response.data.message == "string")
          setErrors([err.response.data.message]);
        else setErrors([...err.response.data.message]);
      }
    }
  };
  useEffect(() => {
    if (props.token) {
      props.navigation.navigate("NewsFeed", {
        token: props.token,
      });
    }
  }, [props.token]);
  /*  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      err.message;
    }); */
  return (
    <View>
      <NavbarHeader hideBackButton={true}></NavbarHeader>
      <View style={main.container}>
        <Text style={title.container}>
          Welcome to Newsgetter, the news portal where users see their own datas
        </Text>
        <View style={inputsView.container}>
          <View style={inputBox.container}>
            <TextInput
              style={inputText.container}
              onChangeText={(text) => {
                setUsername(text);
              }}
              value={username}
            />
          </View>
          <View style={inputBox.container}>
            <TextInput
              style={inputText.container}
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
            />
          </View>
        </View>
        <View style={links.container}>
          <TouchableOpacity
            onPress={() => {
              console.log("working?");
              props.navigation.navigate("Registration");
            }}
          >
            <Text style={createAccountText.container}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={loginButton.container}
            onPress={() => {
              console.log("doingit!");
              onSubmit();
            }}
          >
            <Text style={buttonText.container}>Login</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ height: 100, resizeMode: "contain" }}
          source={require("../../assets/logo.png")}
        ></Image>
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

export default Indice;
