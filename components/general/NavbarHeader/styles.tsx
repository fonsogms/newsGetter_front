import { StyleSheet } from "react-native";
import { screen } from "../../../globalVariables";

export const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#48CFAD",
    width: "100%",
    height: screen.height * 0.12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export const innerHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
    height: "100%",
  },
});
