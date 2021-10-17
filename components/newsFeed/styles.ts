import { StyleSheet, Platform } from "react-native";
import { isAndroid, screen } from "../../globalVariables";
import { theme } from "../../theme";
export const titleStyle = StyleSheet.create({
  container: {
    color: "#646464",
    fontSize: 15,
    fontFamily: theme.mohave_medium,
    marginBottom: 10,
  },
});
export const descriptionStyle = StyleSheet.create({
  container: {
    color: "#4F4F4F",
    fontSize: 12,
    fontFamily: theme.mohave_Regular,
    marginBottom: 10,
  },
});

export const textViewStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export const articleMainStyle = StyleSheet.create({
  container: { backgroundColor: "white", marginBottom: 40 },
});
export const CategoriesBar = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.green,
    height: screen.height * 0.03,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: theme.yellow,
    borderBottomWidth: isAndroid ? 2 : 2,
    width: "100%",
  },
});

export const CategoriesText = (selected: boolean) =>
  StyleSheet.create({
    container: {
      fontFamily: theme.mohave_medium,
      color: selected ? theme.yellow : "white",
      fontSize: 18,
      borderBottomColor: selected ? theme.yellow : "white",
    },
  });
