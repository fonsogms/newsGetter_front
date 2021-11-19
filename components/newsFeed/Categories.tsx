import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category, DBArticleInterface } from "./article.interface";
import { CategoriesBar, CategoriesText } from "./styles";
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

  setSearchQuery,
}: {
  selectedCategory: string;
  setArticles: React.Dispatch<React.SetStateAction<DBArticleInterface[]>>;
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{ category: string; limit: number }>
  >;
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
              setSearchQuery({
                category: category === "Tech" ? "TECHNOLOGY" : category,
                limit: 0,
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
