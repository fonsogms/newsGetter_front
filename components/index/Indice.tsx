import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import axios, { AxiosResponse } from "axios";
import { url } from "../../globalVariables";
import {
  inputStyle,
  inputsView,
  loginButton,
  main,
  title,
  usernameView,
  buttonText,
  createAccountText,
  links,
} from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Indice = (props) => {
  if (props.token) {
    props.navigation.navigate("NewsFeed");
  }
  const [username, setUsername] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");

  const onSubmit = async (): Promise<void> => {
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
      props.navigation.navigate("NewsFeed", {
        token: props.token,
      });
    } catch (err) {
      console.log(err);
    }
  };
  /*  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      err.message;
    }); */
  return (
    <View style={main.container}>
      <Text style={title.container}>
        Welcome to Newsgetter, the news portal where users sees their own data
      </Text>
      <View style={inputsView.container}>
        <View style={usernameView.container}>
          <TextInput
            style={inputStyle.container}
            onChangeText={(text) => {
              setUsername(text);
            }}
            value={username}
          />
        </View>
        <View style={usernameView.container}>
          <TextInput
            style={inputStyle.container}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
          />
        </View>
      </View>
      <View style={links.container}>
        <TouchableOpacity>
          <Text style={createAccountText.container}>Create accounts</Text>
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
    </View>
  );
};

export default Indice;
