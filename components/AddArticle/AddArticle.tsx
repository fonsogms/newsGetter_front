import React, { useState } from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import { useRootContext } from "../../rootContext";
import { theme } from "../../theme";
import NavbarHeader from "../general/NavbarHeader/NavbarHeader";
import { title } from "../globalStyles";
import ButtonSection from "./ButtonSection";
import PreviewArticle from "./PreviewArticle";
import { PreviewArticleInterface } from "./previewData";
import SumbitUrlSection from "./SumbitUrlSection";
import * as RootNavigation from "../../RouteNavigation";
import GenericButton from "../general/GenericButton";
import { apiService } from "../../services/apiService";

const AddArticle = () => {
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
  const [category, setCategory] = useState<string>("");
  const [isArticleSaved, setIsArticleSaved] = useState(false);
  const getPreviewData = async (url: string) => {
    setLoading(true);
    try {
      const previewData = await apiService.previewArticle(url);
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
      setLoading(false);
      apiService.handleError(err);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <NavbarHeader showBurgerMenu></NavbarHeader>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {!isArticleSaved ? (
          <>
            {!loading ? (
              <>
                <Text
                  style={{
                    ...title.container,
                    width: "80%",
                    marginBottom: "7%",
                  }}
                >
                  Add here the url of the article you want to add
                </Text>
                {previewArticle.title ? (
                  <View style={{ flex: 0.8 }}>
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
                )}
              </>
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

            <GenericButton
              buttonStyle={{ width: 120, height: 40 }}
              textStyle={{ fontSize: 25 }}
              onPress={() => {
                RootNavigation.navigate("NewsFeed", {});
              }}
            >
              Go back
            </GenericButton>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddArticle;
