import axios from "axios";
import React, { useState } from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import { url as apiUrl } from "../../globalVariables";
import { theme } from "../../theme";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { title } from "../globalStyles";
import ButtonSection from "./ButtonSection";
import PreviewArticle from "./PreviewArticle";
import { PreviewArticleInterface, PreviewData } from "./previewData";
import SumbitUrlSection from "./SumbitUrlSection";

const AddUser = (props) => {
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
  const [category, setCategory] = useState<string>("Choose category");
  const [isArticleSaved, setIsArticleSaved] = useState(false);
  const getPreviewData = async (url: string) => {
    setLoading(true);
    try {
      const { data: previewData } = await axios.get<PreviewData>(
        apiUrl + "/api/urlPreview?url=" + url
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
      console.warn(err);
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
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <Image
              source={require("../../assets/output-onlinegiftools.gif")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AddUser;
