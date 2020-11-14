import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import axios from "axios";
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
const Indice = () => {
  const [username, setUsername] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");

  const onChangeText = async (text: string, type: string) => {
    if (type == "username") {
      setUsername(text);
    } else {
      setPassword(text);
    }
  };
  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      err.message;
    });

  return (
    <View style={main.container}>
      <Text style={title.container}>
        Welcome to Newsgetter, the news portal where users sees their own data
      </Text>
      <View style={inputsView.container}>
        <View style={usernameView.container}>
          <TextInput
            style={inputStyle.container}
            onChangeText={(text) => onChangeText(text, "username")}
            value={username}
          />
        </View>
        <View style={usernameView.container}>
          <TextInput
            style={inputStyle.container}
            onChangeText={(text) => onChangeText(text, "password")}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={links.container}>
        <TouchableOpacity>
          <Text style={createAccountText.container}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginButton.container}>
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
