import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  titleStyle,
  descriptionStyle,
  textViewStyle,
  articleMainStyle,
} from "./styles";
const Articles = ({ title, description, image, url, source, navigation }) => {
  return (
    <View style={articleMainStyle.container}>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation, "this is navigation");
          navigation.navigate("ArticleWeb", { url: url });
        }}
      >
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{ uri: image }}
        ></Image>
        <View style={textViewStyle.container}>
          <Text style={titleStyle.container}>{title}</Text>
          <Text style={descriptionStyle.container}>{description}</Text>
          <Text style={descriptionStyle.container}>Fuente: {source}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Articles;
