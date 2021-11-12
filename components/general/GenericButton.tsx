import React from "react";
import {
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../theme";

const GenericButton = ({
  buttonStyle,
  textStyle,
  children,
  onPress,
}: {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.green,
        width: 68,
        height: 30,
        borderRadius: 2,
        justifyContent: "center",
        ...buttonStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: theme.mohave_medium,
          color: theme.yellow,
          fontSize: 24,
          textAlign: "center",
          ...textStyle,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default GenericButton;
