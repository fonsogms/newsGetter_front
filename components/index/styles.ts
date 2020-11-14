import { StyleSheet } from "react-native";

export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export const title = StyleSheet.create({
  container: {
    color: "#8C8C8C",
    fontSize: 25,
    width: "70%",
    textAlign: "center",
    fontFamily: "Mohave-Medium",
  },
});
export const inputsView = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    justifyContent: "space-between",
  },
});
export const usernameView = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
});
export const inputStyle = StyleSheet.create({
  container: {
    fontFamily: "Mohave-Medium",
    height: 40,
    color: "#979494",
    fontSize: 18,
  },
});

export const loginButton = StyleSheet.create({
  container: {
    backgroundColor: "#48CFAD",
    width: 68,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
  },
});

export const buttonText = StyleSheet.create({
  container: {
    fontFamily: "Mohave-Medium",
    color: "#FFCE54",
    fontSize: 24,
    textAlign: "center",
  },
});

export const createAccountText = StyleSheet.create({
  container: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Mohave-Medium",
    color: "#0066FF",
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
