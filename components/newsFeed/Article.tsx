import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  titleStyle,
  descriptionStyle,
  textViewStyle,
  articleMainStyle,
} from "./styles";
import VotingSection from "./VotingSection";
const Articles = ({
  title,
  description,
  image,
  url,
  source,
  navigation,
  index,
  leftVotes,
  rightVotes,
}) => {
  return (
    <View style={articleMainStyle.container}>
      <TouchableOpacity
        onPress={() => {
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
      <VotingSection
        index={index}
        leftVotes={leftVotes}
        rightVotes={rightVotes}
      ></VotingSection>
    </View>
  );
};

export default Articles;
