import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { theme } from "../../theme";
import { buttonText, inputBox, inputText } from "../globalStyles";
import { loginButton } from "../index/styles";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { Category } from "../newsFeed/article.interface";

interface SumbitUrlSectionProps {
  setUrlInput: React.Dispatch<React.SetStateAction<string>>;
  urlInput: string;
  getPreviewData: (url: string) => Promise<void>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}
const SumbitUrlSection = ({
  setUrlInput,
  urlInput,
  getPreviewData,
  setCategory,
  category,
}: SumbitUrlSectionProps) => {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ ...inputBox.container, width: "60%" }}>
        <TextInput
          onChangeText={(text) => {
            setUrlInput(text);
          }}
          onFocus={() => {
            if (urlInput === "Paste your url here") {
              setUrlInput("");
            }
          }}
          style={inputText.container}
          value={urlInput}
        ></TextInput>
      </View>

      <SelectDropdown
        data={Object.keys(Category).map(
          (category) =>
            category.substring(0, 1) + category.substr(1).toLocaleLowerCase()
        )}
        // defaultValueByIndex={1}
        // defaultValue={'Choose city'}
        onSelect={(selectedItem, index) => {
          setCategory(selectedItem);
        }}
        buttonStyle={{
          marginTop: 10,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: theme.light_grey,
        }}
        dropdownStyle={{
          borderWidth: 1,
          borderColor: theme.light_grey,
          borderTopColor: theme.light_grey,
        }}
        buttonTextStyle={{
          textAlign: "left",
          fontFamily: theme.mohave_medium,
          fontSize: 18,
          color: theme.grey,
        }}
        rowTextStyle={{
          textAlign: "left",
          paddingLeft: 6,
          color: theme.grey,
          fontFamily: theme.mohave_medium,
        }}
        defaultButtonText={category}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        renderDropdownIcon={() => (
          <>
            <Ionicons
              name="ios-arrow-down"
              size={25}
              color={theme.green}
            ></Ionicons>
          </>
        )}
        dropdownIconPosition="right"
      />

      <TouchableOpacity
        style={{
          ...loginButton.container,
          width: 100,
          marginTop: 20,
        }}
        onPress={() => {
          getPreviewData(urlInput);
        }}
      >
        <Text style={{ ...buttonText.container }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SumbitUrlSection;
