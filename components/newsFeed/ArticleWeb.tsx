import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";

const ArticleWeb = ({ route }) => {
  return (
    <View style={{ height: "100%" }}>
      <NavbarHeader></NavbarHeader>
      <WebView source={{ uri: route.params.url }}></WebView>
    </View>
  );
};

export default ArticleWeb;
