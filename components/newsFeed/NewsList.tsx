import React, { useEffect, useState, useRef } from "react";
import { View } from "react-native";

import {
  Category,
  DBArticleInterface,
  VoteInterface,
} from "./article.interface";
import Article from "./Article";
import { FlatList } from "react-native-gesture-handler";
import Categories from "./Categories";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { useRootContext } from "../../rootContext";
import { AddButton } from "./AddButton";
import { apiService } from "../../services/apiService";

const NewsList = (props) => {
  const { token } = useRootContext();
  const flatListContainer = useRef(null);
  const [articles, setArticles] = useState<DBArticleInterface[]>([]);
  const [votes, setVotes] = useState<VoteInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState<{
    category: string;
    limit: number;
  }>({
    category: Category.GENERAL,
    limit: 0,
  });
  const { category, limit } = searchQuery;

  useEffect(() => {
    getArticles();
  }, [searchQuery]);

  async function getArticles() {
    try {
      const data = await apiService.getArticles(category, limit);
      const { articles: apiArticles, votes } = data;
      setArticles([...articles, ...apiArticles]);
      setVotes(votes);
    } catch (err) {
      apiService.handleError(err);
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
        token={token}
      ></Article>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <NavbarHeader hideBackButton={true} showBurgerMenu></NavbarHeader>
      <Categories
        setSearchQuery={setSearchQuery}
        selectedCategory={category}
        setArticles={setArticles}
      ></Categories>
      <FlatList
        style={{ height: "100%" }}
        ref={flatListContainer}
        refreshing={true}
        data={articles}
        renderItem={item}
        onEndReached={() => {
          // console.log("the end");
          if (!(articles.length < 5)) {
            console.log(articles[articles.length - 1].id);
            setSearchQuery({ ...searchQuery, limit: limit + 5 });
          }
        }}
        onEndReachedThreshold={0.3}
        //setSearchQuery({ ...searchQuery, limit: searchQuery.limit + 5 });
      ></FlatList>
      <AddButton navigate={props.navigation.navigate}></AddButton>
    </View>
  );
};

export default NewsList;
