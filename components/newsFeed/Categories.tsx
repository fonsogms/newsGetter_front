import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category } from "./article.interface";
import { CategoriesBar, CategoriesText } from "./styles";
import { BoxShadow } from "react-native-shadow";
const shadowOpt = {
  width: 100,
  height: 100,
  color: "#000",
  border: 2,
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: { marginVertical: 5 },
};

const Categories = ({
  selectedCategory,
  setArticles,
  articles,
  navigation,
}) => {
  return (
    <View style={CategoriesBar.container}>
      {Object.keys(Category).map((category) => {
        let selected = false;
        if (category === "GENERAL") return null;
        if (selectedCategory == category) selected = true;
        if (category === "TECHNOLOGY") category = "Tech";

        return (
          <TouchableOpacity
            onPress={() => {
              setArticles([]);
              navigation.navigate("NewsFeed", {
                selectedCategory: category === "Tech" ? "TECHNOLOGY" : category,
              });
            }}
          >
            <Text key={category} style={CategoriesText(selected).container}>
              {category[0] + category.slice(1).toLocaleLowerCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Categories;
