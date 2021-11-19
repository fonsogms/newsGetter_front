import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useRootContext } from "../../../rootContext";
import { theme } from "../../../theme";
import { title } from "../../globalStyles";
import GenericButton from "../GenericButton";
const ErrorModal = () => {
  const { apiError, setApiError } = useRootContext();
  const isVisible = apiError[0] ? true : false;
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.3}>
      <View
        style={{
          flex: 0.3,
          backgroundColor: theme.light_grey,
          borderRadius: 7,
          width: "80%",
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
          {apiError.join(" ")}
        </Text>

        <GenericButton
          onPress={() => {
            setApiError([]);
          }}
          buttonStyle={{ width: 100, marginBottom: 20, height: 30 }}
        >
          Cancel
        </GenericButton>
      </View>
    </Modal>
  );
};

export default ErrorModal;
