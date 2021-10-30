import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useRootContext } from "../../../rootContext";
import { theme } from "../../../theme";
import { buttonText, title } from "../../globalStyles";
import { loginButton } from "../../index/styles";
const ErrorModal = () => {
  const { apiError, setApiError } = useRootContext();
  const isVisible = apiError[0] ? true : false;
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.3}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: theme.light_grey,
          borderRadius: 7,
          width: "70%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...title.container,
            fontSize: 30,
            color: theme.dark_grey,
            fontFamily: theme.mohave_Bold,
            width: "100%",
            marginTop: 10,
          }}
        >
          Error
        </Text>

        <Text
          style={{
            ...title.container,
            fontSize: 20,
            fontFamily: theme.mohave_Regular,
          }}
        >
          {apiError[0]}
        </Text>
        <TouchableOpacity
          style={{
            ...loginButton.container,
            width: 100,
            marginBottom: 20,
          }}
          onPress={() => {
            setApiError([]);
          }}
        >
          <Text style={{ ...buttonText.container }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ErrorModal;
