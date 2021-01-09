import axios, { AxiosError } from "axios";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { url } from "../../globalVariables";
import { DBArticleInterface } from "./article.interface";
import Article from "./Article";
import Header from "../Header";
import { ScrollView } from "react-native-gesture-handler";
const NewsList = (props) => {
  const [articles, setArticles] = useState<DBArticleInterface[]>([]);
  useEffect(() => {
    getArticles();
  }, []);
  async function getArticles() {
    try {
      //console.log("living la vida loca", props.token);
      const { data } = await axios.get<DBArticleInterface[]>(
        url + "/api/news?category=GENERAL",
        { headers: { Authorization: `Bearer ${props.token}` } }
      );
      setArticles(data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  return (
    <ScrollView>
      {articles.map((elem) => {
        return (
          <Article
            key={elem.id}
            title={elem.title}
            description={elem.description}
            image={elem.image}
            url={elem.url}
            source={elem.source.name}
            navigation={props.navigation}
            index={elem.id}
            leftVotes={elem.leftVotes}
            rightVotes={elem.rightVotes}
          ></Article>
        );
      })}
    </ScrollView>
  );
};

export default NewsList;
