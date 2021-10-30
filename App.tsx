import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Routes from "./Routes";
import axios from "axios";
import { url } from "./globalVariables";
import { ActivityIndicator, View } from "react-native";
import { theme } from "./theme";
import { RootContext } from "./rootContext";
import Modal from "react-native-modal";
import ErrorModal from "./components/general/ErrorModal/ErrorModal";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  const [apiError, setApiError] = useState<string[]>([]);
  useEffect(() => {
    async function getToken() {
      try {
        const saved_token = await AsyncStorage.getItem("token");
        const { data } = await axios.post<{ token: string }>(
          url + "/api/auth/loggedin",
          { token: saved_token }
        );

        setToken(data.token);
      } catch (err) {
        // console.log(err.response.data.message);
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
    <RootContext.Provider value={{ token, setToken, apiError, setApiError }}>
      <Routes style={{ flex: 1 }} token={token} setToken={setToken}></Routes>
      <ErrorModal></ErrorModal>
    </RootContext.Provider>
  );
}
