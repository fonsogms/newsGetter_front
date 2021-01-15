import axios, { AxiosError } from "axios";
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Text, View } from "react-native";
import { url } from "../../globalVariables";
import {
  Category,
  DBArticleInterface,
  VoteInterface,
} from "./article.interface";
import Article from "./Article";
import Header from "../Header";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Categories from "./Categories";
const NewsList = (props) => {
  const flatListContainer = useRef(null);
  const [articles, setArticles] = useState<DBArticleInterface[]>([]);
  const [votes, setVotes] = useState<VoteInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState<{
    selectedCategory: Category;
    limit: number;
  }>({ selectedCategory: Category.GENERAL, limit: 0 });

  useEffect(() => {
    getArticles(searchQuery.selectedCategory, searchQuery.limit);
  }, [searchQuery]);

  async function getArticles(category: Category, limit: number) {
    try {
      const { data } = await axios.get<{
        articles: DBArticleInterface[];
        votes: VoteInterface[];
      }>(url + `/api/news?category=${category}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${props.token}` },
      });
      const { articles, votes } = data;
      setArticles(articles);
      setVotes(votes);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  const item = ({ item: article }: { item: DBArticleInterface }) => {
    let currentVote = 0;
    const countVotes = (direction: number) => {
      return article.votes.reduce((acum, cur) => {
        if (cur.value === direction) {
          return acum + 1;
        } else {
          return acum;
        }
      }, 0);
    };
    const leftVotes = countVotes(-1);
    const rightVotes = countVotes(1);
    const articleVote = votes.find((vote) => {
      return vote.articleId == article.id;
    });
    if (articleVote) {
      currentVote = articleVote.value;
    }
    return (
      <Article
        key={article.id}
        title={article.title}
        description={article.description}
        image={article.image}
        articleUrl={article.url}
        source={article.source}
        navigation={props.navigation}
        index={article.id}
        leftVotes={leftVotes}
        rightVotes={rightVotes}
        voteValue={currentVote}
        token={props.token}
      ></Article>
    );
  };
  return (
    <View>
      <Categories
        selectedCategory={searchQuery.selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        flatListContainer={flatListContainer}
      ></Categories>
      <FlatList
        extraData={searchQuery}
        ref={flatListContainer}
        data={articles}
        renderItem={item}
        onEndReached={() => {
          console.log("the end");
        }}
        onEndReachedThreshold={0.98}
        //setSearchQuery({ ...searchQuery, limit: searchQuery.limit + 5 });
      ></FlatList>
    </View>
  );
};

export default NewsList;
