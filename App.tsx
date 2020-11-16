import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Routes from "./Routes";
import axios from "axios";
import { url } from "./globalVariables";
import { ActivityIndicator, View } from "react-native";
export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    async function getToken() {
      try {
        console.log("happening?");

        const saved_token = await AsyncStorage.getItem("token");
        console.log(saved_token);
        const { data } = await axios.post<{ token: string }>(
          url + "/api/auth/loggedin",
          { token: saved_token }
        );
        console.log(data, "the data");
        setToken(data.token);
      } catch (err) {
        console.log(err);
      }
    }
    getToken();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [token]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#48CFAD" />
      </View>
    );
  }
  return <Routes token={token} setToken={setToken}></Routes>;
}
