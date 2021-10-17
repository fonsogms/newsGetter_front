import { StyleSheet } from "react-native";
import { screen } from "../globalVariables";
import { theme } from "../theme";

export const inputsView = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    justifyContent: "space-between",
  },
});

export const main = StyleSheet.create({
  container: {
    height: screen.height * 0.88,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export const title = StyleSheet.create({
  container: {
    color: theme.dark_grey,
    fontSize: 25,
    width: "70%",
    textAlign: "center",
    fontFamily: theme.mohave_medium,
  },
});
export const inputBox = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.light_grey,
  },
});
export const inputText = StyleSheet.create({
  container: {
    fontFamily: theme.mohave_medium,
    height: 40,
    color: theme.grey,
    fontSize: 18,
  },
});
export const buttonText = StyleSheet.create({
  container: {
    fontFamily: theme.mohave_medium,
    color: theme.yellow,
    fontSize: 24,
    textAlign: "center",
  },
});
