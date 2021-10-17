import { StyleSheet, Platform } from "react-native";
import { isAndroid, screen } from "../../globalVariables";

export const titleStyle = StyleSheet.create({
  container: {
    color: "#646464",
    fontSize: 15,
    fontFamily: "Mohave-Medium",
    marginBottom: 10,
  },
});
export const descriptionStyle = StyleSheet.create({
  container: {
    color: "#4F4F4F",
    fontSize: 12,
    fontFamily: "Mohave-Regular",
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
    backgroundColor: "#48CFAD",
    height: screen.height * 0.03,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "#FFCE54",
    borderBottomWidth: isAndroid ? 1 : 1,
    width: "100%",
  },
});

export const CategoriesText = (selected: boolean) =>
  StyleSheet.create({
    container: {
      fontFamily: "Mohave-Medium",
      color: selected ? "#FFCE54" : "white",
      fontSize: 18,
      borderBottomColor: selected ? "#FFCE54" : "white",
    },
  });
