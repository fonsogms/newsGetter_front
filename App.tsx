import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Routes from "./Routes";
import axios from "axios";
import { url } from "./globalVariables";
import { ActivityIndicator, View } from "react-native";
import { theme } from "./theme";
export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    async function getToken() {
      try {
        console.log(" get token happening?");

        const saved_token = await AsyncStorage.getItem("token");
        console.log(saved_token, "token in the phone");
        const { data } = await axios.post<{ token: string }>(
          url + "/api/auth/loggedin",
          { token: saved_token }
        );
        console.log(data.token, "the refreshed token");

        setToken(data.token);
      } catch (err) {
        console.log(err.response.data.message);
        setToken("");
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
        <ActivityIndicator size="large" color={theme.green} />
      </View>
    );
  }

  return (
    <Routes style={{ flex: 1 }} token={token} setToken={setToken}></Routes>
  );
}
