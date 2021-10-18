import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const ModalStyles = StyleSheet.create({
  mainView: { margin: 20 },
  logoutTouchable: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    marginLeft: 10,
    fontFamily: theme.mohave_medium,
    fontSize: 22,
    color: theme.dark_grey,
  },
});
