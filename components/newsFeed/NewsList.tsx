import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { url } from "../../globalVariables";
import { DBArticleInterface } from "./article.interface";
import Article from "./Article";
import { ScrollView } from "react-native-gesture-handler";
const NewsList = (props) => {
  console.log(props.navigation);
  const [articles, setArticles] = useState<DBArticleInterface[]>([]);
  useEffect(() => {
    getArticles();
  }, []);
  async function getArticles() {
    try {
      console.log("living la vida loca", props.token);
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
            title={elem.title}
            description={elem.description}
            image={elem.image}
            url={elem.url}
            source={elem.source.name}
            navigation={props.navigation}
          ></Article>
        );
      })}
    </ScrollView>
  );
};

export default NewsList;
