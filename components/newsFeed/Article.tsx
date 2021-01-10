import Axios, { AxiosError } from "axios";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {url} from "../../globalVariables"
import axios from "axios"
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
  articleUrl,
  source,
  navigation,
  index,
  leftVotes,
  rightVotes,
  voteValue,token
}) => {
  return (
    <View style={articleMainStyle.container}>
      <TouchableOpacity
        onPress={async() => {
          await axios.post(url+"/api/news/view",{articleId:index},{ headers: { Authorization: `Bearer ${token}` } }).then(res=>{
            console.log("this is the response",res.data)
          }).catch((err:AxiosError)=>{
            console.log(err.response.data)
          })
          navigation.navigate("ArticleWeb", { url: articleUrl })
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
        voteValue={voteValue}
        token={token}
      ></VotingSection>
    </View>
  );
};

export default Articles;
