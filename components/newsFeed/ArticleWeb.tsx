import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const ArticleWeb = ({ route }) => {
  return <WebView source={{ uri: route.params.url }}></WebView>;
};

export default ArticleWeb;
