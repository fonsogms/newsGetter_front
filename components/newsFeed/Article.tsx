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
import { apiService } from "../../services/apiService";
const Articles = ({
  title,
  description,
  image,
  articleUrl,
  source,
  navigation,
  index,
  leftVotes,
  rightVotes,
  voteValue,
  token,
}) => {
  const goToPageView = async () => {
    try {
      const data = await apiService.viewArticle(index, source);
      navigation.navigate("ArticleWeb", { url: articleUrl });
    } catch (err) {
      apiService.handleError(err);
    }
  };
  return (
    <View style={articleMainStyle.container}>
      <TouchableOpacity
        onPress={() => {
          goToPageView();
        }}
      >
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{ uri: image }}
        ></Image>
        <View style={textViewStyle.container}>
          <Text style={titleStyle.container}>{title}</Text>
          <Text style={descriptionStyle.container}>{description}</Text>
          <Text style={descriptionStyle.container}>Fuente: {source.name}</Text>
        </View>
      </TouchableOpacity>
      <VotingSection
        index={index}
        leftVotes={leftVotes}
        rightVotes={rightVotes}
        voteValue={voteValue}
        token={token}
        publisher={source}
      ></VotingSection>
    </View>
  );
};

export default Articles;
