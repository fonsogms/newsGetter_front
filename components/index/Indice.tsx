import React, { useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { url } from "../../globalVariables";
import { inputsView, main, title, usernameView } from "./styles";
import { TextInput } from "react-native-gesture-handler";
const Indice = () => {
  const [titulo, setTitulo] = useState("");
  const [username, setUsername] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");

  const onChangeText = async (text: string) => {
    setUsername(text);
  };
  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
      setTitulo(data);
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
            style={{ height: 40 }}
            onChangeText={(text) => onChangeText(text)}
            value={username}
          />
        </View>
        <View style={usernameView.container}>
          <TextInput
            style={{ height: 40 }}
            onChangeText={(text) => onChangeText(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Indice;
