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
  const [limit, setLimit] = useState<number>(0);

  useEffect(() => {
    if (token) {
      if (!props.route.params) {
        getArticles(Category.GENERAL, 0);
      } else {
        getArticles(props.route.params.selectedCategory, limit);
      }
    }
  }, [props.route, limit]);
  async function getArticles(category: Category, limit: number) {
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

      <View>
        <Categories
          selectedCategory={
            props.route.params ? props.route.params.selectedCategory : "GENERAL"
          }
          navigation={props.navigation}
          articles={articles}
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
            setLimit(limit + 5);
          }}
          onEndReachedThreshold={0.9}
          //setSearchQuery({ ...searchQuery, limit: searchQuery.limit + 5 });
        ></FlatList>
      </View>
      <AddButton navigate={props.navigation.navigate}></AddButton>
    </View>
  );
};

export default NewsList;
