import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category } from "./article.interface";
import { CategoriesBar, CategoriesText } from "./styles";
const Categories = ({
  selectedCategory,
  setArticles,
  articles,
  navigation,
}) => {
  const [newCategory, setNewCategory] = useState("");
  useEffect(() => {
    //
  }, [articles]);
  return (
    <View style={CategoriesBar.container}>
      {Object.keys(Category).map((category) => {
        let selected = false;
        if (category === "GENERAL") return null;
        if (category === "TECHNOLOGY") category = "Tech";
        if (selectedCategory == category) selected = true;
        return (
          <TouchableOpacity
            onPress={() => {
              setArticles([]);
              navigation.navigate("NewsFeed", { selectedCategory: category });
            }}
          >
            <Text key={category} style={CategoriesText(selected).container}>
              {category[0] + category.slice(1).toLocaleLowerCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
      {/*   <Text
        style={{ fontFamily: "Mohave-Medium", color: "white", fontSize: 20 }}
      >
        Bussines
      </Text>
      <Text
        style={{ fontFamily: "Mohave-Medium", color: "white", fontSize: 20 }}
      >
        Tech
      </Text>
      <Text
        style={{ fontFamily: "Mohave-Medium", color: "white", fontSize: 20 }}
      >
        Entertainment
      </Text>
      <Text
        style={{ fontFamily: "Mohave-Medium", color: "white", fontSize: 20 }}
      >
        Sports
      </Text>
      <Text
        style={{ fontFamily: "Mohave-Medium", color: "white", fontSize: 20 }}
      >
        Science
      </Text> */}
    </View>
  );
};

export default Categories;
