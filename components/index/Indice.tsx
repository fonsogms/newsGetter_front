import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import axios from "axios";
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
import { useRootContext } from "../../rootContext";
interface Username {
  value: string;
  isClean: boolean;
}
interface Password {
  value: string;
  isClean: boolean;
}
const Indice = (props) => {
  const { token, setToken } = useRootContext();
  const [errors, setErrors] = useState<string[]>([]);
  const { apiError, setApiError } = useRootContext();
  const [username, setUsername] = useState<Username>({
    value: "username",
    isClean: false,
  });
  const [password, setPassword] = useState<Password>({
    value: "Password",
    isClean: false,
  });

  const onSubmit = async (): Promise<void> => {
    console.log(username, password);
    try {
      console.log(url);
      const { data } = await axios.post<{ token: string }>(
        url + "/api/auth/signin",
        {
          username: username.value,
          password: password.value,
        }
      );
      console.log(data, "the data");
      await AsyncStorage.setItem("token", data.token);
      setToken(data.token);

      setErrors([]);
    } catch (err) {
      console.warn(err.response.data.message, "the error");
      if (err.response.data.message) {
        console.log(typeof err.response.data.message);

        if (typeof err.response.data.message == "string") {
          setErrors([err.response.data.message]);
          setApiError([err.response.data.message]);
        } else {
          setErrors([...err.response.data.message]);
          setApiError([err.response.data.message]);
        }
      }
    }
  };
  useEffect(() => {
    if (token) {
      props.navigation.navigate("NewsFeed", {
        token: token,
      });
    }
  }, [token]);

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
              onFocus={() => {
                if (!username.isClean) {
                  setUsername({ value: "", isClean: true });
                }
              }}
              onChangeText={(text) => {
                setUsername({ value: text, isClean: true });
              }}
              value={username.value}
            />
          </View>
          <View style={inputBox.container}>
            <TextInput
              style={inputText.container}
              secureTextEntry={true}
              onFocus={() => {
                if (!password.isClean) {
                  setPassword({ value: "", isClean: true });
                }
              }}
              onChangeText={(text) => {
                setPassword({ value: text, isClean: true });
              }}
              value={password.value}
            />
          </View>
        </View>
        <View style={links.container}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Registration");
            }}
          >
            <Text style={createAccountText.container}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={loginButton.container}
            onPress={() => {
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
