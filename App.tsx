import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Routes from "./Routes";
import { ActivityIndicator, View } from "react-native";
import { theme } from "./theme";
import { RootContext } from "./rootContext";
import ErrorModal from "./components/general/ErrorModal/ErrorModal";
import { apiService } from "./services/apiService";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  const [apiError, setApiError] = useState<string[]>([]);
  apiService.setToken(token);

  useEffect(() => {
    apiService.init(setApiError);
    getToken();
  }, []);
  const getToken = async () => {
    setLoading(true);
    const saved_token = await AsyncStorage.getItem("token");

    const newToken = await apiService.getToken(saved_token);
    if (newToken) {
      setToken(newToken);
    }
  };
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
