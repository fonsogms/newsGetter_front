import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { theme } from "../../theme";
import { buttonText, inputBox, inputText } from "../globalStyles";
import { loginButton } from "../index/styles";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { Category } from "../newsFeed/article.interface";
import GenericButton from "../general/GenericButton";

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
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "20%",
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
        defaultValue={category}
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
              name="md-chevron-down-outline"
              size={25}
              color={theme.green}
            ></Ionicons>
          </>
        )}
        dropdownIconPosition="right"
      />

      <GenericButton
        buttonStyle={{ width: 110, height: 40, marginTop: 20 }}
        textStyle={{ fontSize: 25 }}
        onPress={() => {
          getPreviewData(urlInput);
        }}
      >
        Submit
      </GenericButton>
    </View>
  );
};

export default SumbitUrlSection;
