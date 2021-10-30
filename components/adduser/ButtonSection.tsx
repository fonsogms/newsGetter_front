import axios from "axios";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { url as apiUrl } from "../../globalVariables";
import { useRootContext } from "../../rootContext";
import { theme } from "../../theme";
import { buttonText, inputText } from "../globalStyles";
import { loginButton } from "../index/styles";
import { PreviewArticleInterface } from "./previewData";

const ButtonSection = ({
  setPreviewArticle,
  category,
  urlInput,
  setIsArticleSaved,
}: {
  setPreviewArticle: React.Dispatch<
    React.SetStateAction<PreviewArticleInterface>
  >;
  category: string;
  urlInput: string;
  setIsArticleSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { token } = useRootContext();
  const cancelSubmission = () => {
    setPreviewArticle({ title: "", description: "", image: "", siteName: "" });
  };
  const saveArticle = async () => {
    const { data } = await axios.post<{ success: boolean }>(
      apiUrl + "/api/news/add",
      {
        url: urlInput,
        category: category.toLocaleUpperCase(),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (data.success) {
      setIsArticleSaved(true);
    }
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity
        style={{ ...loginButton.container, width: 75, height: 30 }}
        onPress={() => {
          saveArticle();
        }}
      >
        <Text style={{ ...buttonText.container, color: theme.white }}>
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...loginButton.container,
          backgroundColor: theme.red,
          width: 75,
          height: 30,
        }}
        onPress={() => {
          cancelSubmission();
        }}
      >
        <Text style={{ ...buttonText.container, color: theme.white }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSection;
