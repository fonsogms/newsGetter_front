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
  const showDescription = (newDescription: string) => {
    if (newDescription) {
      let descriptionArray = newDescription.split(".");
      if (descriptionArray.length > 1 && descriptionArray[0].length < 400) {
        return descriptionArray[0];
      } else {
        descriptionArray = newDescription.split(",");
        console.warn("pasa");
        return descriptionArray[0];
      }
    }
  };
  return (
    <View>
      <View
        style={{
          ...articleMainStyle.container,
          marginBottom: 15,
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={{ uri: image }}
          ></Image>
          <View style={textViewStyle.container}>
            <Text style={titleStyle.container}>{title}</Text>
            <Text style={descriptionStyle.container}>
              {showDescription(description)}
            </Text>
            <Text style={descriptionStyle.container}>Fuente: {siteName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreviewArticle;