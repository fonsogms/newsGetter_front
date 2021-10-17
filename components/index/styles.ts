import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const loginButton = StyleSheet.create({
  container: {
    backgroundColor: theme.green,
    width: 68,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
  },
});

export const createAccountText = StyleSheet.create({
  container: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: theme.mohave_medium,
    color: theme.blue,
    textDecorationLine: "underline",
  },
});

export const links = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 120,
  },
});
