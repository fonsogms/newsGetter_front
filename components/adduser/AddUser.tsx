import axios from "axios";
import React, { useState } from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { url as apiUrl } from "../../globalVariables";
import { useRootContext } from "../../rootContext";
import { theme } from "../../theme";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { buttonText, title } from "../globalStyles";
import { loginButton } from "../index/styles";
import ButtonSection from "./ButtonSection";
import PreviewArticle from "./PreviewArticle";
import { PreviewArticleInterface, PreviewData } from "./previewData";
import SumbitUrlSection from "./SumbitUrlSection";
import * as RootNavigation from "../../RouteNavigation";

const AddUser = () => {
  const [urlInput, setUrlInput] = useState<string>("Paste your url here");
  const [loading, setLoading] = useState<boolean>(false);
  const [previewArticle, setPreviewArticle] = useState<PreviewArticleInterface>(
    {
      title: "",
      description: "",
      image: "",
      siteName: "",
    }
  );
  const { token } = useRootContext();
  const [category, setCategory] = useState<string>("Choose category");
  const [isArticleSaved, setIsArticleSaved] = useState(false);
  const getPreviewData = async (url: string) => {
    setLoading(true);
    try {
      const { data: previewData } = await axios.get<PreviewData>(
        apiUrl + "/api/urlPreview?url=" + url,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const image = previewData.images[0];
      const { title, description, siteName } = previewData;
      setPreviewArticle({
        title,
        description,
        image,
        siteName,
      });
      setLoading(false);
    } catch (err) {
      console.warn(err.response.data);
      setLoading(false);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <NavbarHeader showBurgerMenu></NavbarHeader>
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        {!isArticleSaved ? (
          <>
            <Text style={{ ...title.container, marginTop: 40, flex: 0.2 }}>
              Add here the url of the article you want to add
            </Text>
            {!loading ? (
              previewArticle.title ? (
                <View>
                  <PreviewArticle
                    title={previewArticle.title}
                    description={previewArticle.description}
                    image={previewArticle.image}
                    siteName={previewArticle.siteName}
                  ></PreviewArticle>
                  <ButtonSection
                    setPreviewArticle={setPreviewArticle}
                    urlInput={urlInput}
                    category={category}
                    setIsArticleSaved={setIsArticleSaved}
                  ></ButtonSection>
                </View>
              ) : (
                <SumbitUrlSection
                  setUrlInput={setUrlInput}
                  urlInput={urlInput}
                  getPreviewData={getPreviewData}
                  category={category}
                  setCategory={setCategory}
                ></SumbitUrlSection>
              )
            ) : (
              <ActivityIndicator size="large" color={theme.green} />
            )}
          </>
        ) : (
          <View
            style={{
              flex: 0.7,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={title.container}> Article saved</Text>
            <Image
              source={require("../../assets/output-onlinegiftools.gif")}
              style={{ width: 200, height: 200 }}
            />
            <TouchableOpacity
              onPress={() => {
                RootNavigation.navigate("NewsFeed", {});
              }}
              style={{ ...loginButton.container, width: 80 }}
            >
              <Text style={buttonText.container}>Go back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddUser;
