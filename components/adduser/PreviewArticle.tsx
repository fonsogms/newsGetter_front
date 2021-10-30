import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  articleMainStyle,
  descriptionStyle,
  textViewStyle,
  titleStyle,
} from "../newsFeed/styles";
import { PreviewArticleInterface } from "./previewData";

const PreviewArticle = ({
  title,
  description,
  image,
  siteName,
}: PreviewArticleInterface) => {
  return (
    <View>
      <View style={articleMainStyle.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={{ uri: image }}
          ></Image>
          <View style={textViewStyle.container}>
            <Text style={titleStyle.container}>{title}</Text>
            <Text style={descriptionStyle.container}>{description}</Text>
            <Text style={descriptionStyle.container}>Fuente: {siteName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreviewArticle;
