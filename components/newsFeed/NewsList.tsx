import axios, { AxiosError } from "axios";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { url } from "../../globalVariables";
import { DBArticleInterface, VoteInterface } from "./article.interface";
import Article from "./Article";
import Header from "../Header";
import { ScrollView } from "react-native-gesture-handler";
const NewsList = (props) => {
  const [articles, setArticles] = useState<DBArticleInterface[]>([]);
  const [votes, setVotes] = useState<VoteInterface[]>([]);

  useEffect(() => {
    getArticles();
  }, []);
 
  async function getArticles() {
    try {
      //console.log("living la vida loca", props.token);
      const { data } = await axios.get<{articles:DBArticleInterface[],votes:VoteInterface[]}>(
        url + "/api/news?category=GENERAL",
        { headers: { Authorization: `Bearer ${props.token}` } }
      );
      const {articles,votes}=data
      setVotes(votes)
      setArticles(articles);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  return (
    <ScrollView>
      {articles.map((article) => {
      let currentVote=0
     const articleVote= votes.find(vote=>{

      return vote.articleid==article.id
     })
   if(articleVote){
     currentVote=articleVote.value
   }
        return (
          <Article
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            articleUrl={article.url}
            source={article.source.name}
            navigation={props.navigation}
            index={article.id}
            leftVotes={article.leftVotes}
            rightVotes={article.rightVotes}
            voteValue={currentVote}
            token={props.token}
          ></Article>
        );
      })}
    </ScrollView>
  );
};

export default NewsList;
