import { StyleSheet } from "react-native";
import { theme } from "../../theme";
export const continueButton = StyleSheet.create({
  container: {
    backgroundColor: theme.green,
    width: 68,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
  },
});

export const politicalButtons = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 20,
  },
});

export const politicalOptionBox = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 2,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
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
export const politicalText = StyleSheet.create({
  container: {
    fontFamily: theme.mohave_Regular,
    fontSize: 14,
  },
});
