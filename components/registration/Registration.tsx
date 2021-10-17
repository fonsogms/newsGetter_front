import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import {
  inputBox,
  buttonText,
  inputsView,
  inputText,
  main,
  title,
} from "../globalStyles";
import { continueButton } from "./style";

const Registration = (props) => {
  interface Password {
    value: string;
    hide: boolean;
  }
  interface Username {
    value: string;
    isClean: boolean;
  }
  const [username, setUsername] = useState<Username>({
    value: "username",
    isClean: false,
  });
  const [password, setPassword] = useState<Password>({
    value: "password",
    hide: false,
  });
  const [password2, setPassword2] = useState<Password>({
    value: "Confirm password",
    hide: false,
  });
  const [equalPass, setEqualPass] = useState<boolean>(true);

  useEffect(() => {
    console.log(password2, password);
    if (password.value === password2.value) {
      setEqualPass(true);
    } else {
      setEqualPass(false);
    }
  }, [password, password2]);
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
        <View
          style={{
            ...inputsView.container,
            justifyContent: "space-between",
            height: 150,
            marginBottom: 20,
          }}
        >
          <View style={inputBox.container}>
            <TextInput
              style={inputText.container}
              value={username.value}
              onFocus={() => {
                if (!username.isClean) {
                  setUsername({ value: "", isClean: true });
                }
              }}
              onChangeText={(text) => {
                if (username) setUsername({ value: text, isClean: true });
              }}
            />
          </View>
          <View
            style={{
              ...inputBox.container,
            }}
          >
            <TextInput
              style={inputText.container}
              secureTextEntry={password.hide}
              onFocus={() => {
                if (!password.hide) {
                  setPassword({ value: "", hide: true });
                }
              }}
              value={password.value}
              onChangeText={(text) => {
                setPassword({ value: text, hide: true });
              }}
            />
          </View>
          <View
            style={{
              ...inputBox.container,
              borderColor: equalPass ? "blue" : "red",
            }}
          >
            <TextInput
              style={inputText.container}
              secureTextEntry={password2.hide}
              value={password2.value}
              onFocus={() => {
                if (!password.value) {
                  setPassword2({ value: "", hide: true });
                }
              }}
              onChangeText={(text) => {
                setPassword2({ value: text, hide: true });
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (equalPass) {
              props.navigation.navigate("Registration2", {
                username: username.value,
                password: password.value,
              });
            }
          }}
          style={{ ...continueButton.container, width: 100 }}
        >
          <Text style={buttonText.container}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
