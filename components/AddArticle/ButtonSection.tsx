import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { apiService } from "../../services/apiService";
import { theme } from "../../theme";
import { buttonText } from "../globalStyles";
import { loginButton } from "../index/styles";
import { PreviewArticleInterface } from "./previewData";

const ButtonSection = ({
  setPreviewArticle,
  category,
  urlInput,
  setIsArticleSaved,
  previewArticle,
}: {
  setPreviewArticle: React.Dispatch<
    React.SetStateAction<PreviewArticleInterface>
  >;
  category: string;
  urlInput: string;
  previewArticle: PreviewArticleInterface;
  setIsArticleSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cancelSubmission = () => {
    setPreviewArticle({ title: "", description: "", image: "", siteName: "" });
  };
  const saveArticle = async () => {
    try {
      const data = await apiService.saveArticle({
        ...previewArticle,
        urlInput,
        category,
      });
      if (data.success) {
        setIsArticleSaved(true);
      }
    } catch (err) {
      apiService.handleError(err);
      setPreviewArticle({
        title: "",
        description: "",
        image: "",
        siteName: "",
      });
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
