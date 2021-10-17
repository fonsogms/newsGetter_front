import Header from "./components/Header";
import Logo from "./components/Logo";
import React from "react";
import { View } from "react-native";
import { screen } from "./globalVariables";
export const navBarStyles = (token, setToken, noShadow?: boolean) => {
  return {
    headerTitle: () => <Logo></Logo>,
    title: "Home",
    headerBackTitleStyle: {
      color: "white",
      fontFamily: "Mohave-Medium",
      fontSize: 20,
    },
    headerTitleAlign: "center",
    headerRight: () => {
      if (token) {
        return <Header token={token} setToken={setToken}></Header>;
      }
      return <View></View>;
    },

    headerStyle: noShadow ? noShadowHeader : headerStyle,
  } as const;
};

const headerStyle = {
  backgroundColor: "#48CFAD",
  height: screen.height * 0.12,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 3.84,
  elevation: 8,
};
const noShadowHeader = {
  backgroundColor: "#48CFAD",
  height: 110,
  borderBottomColor: "#48CFAD",
  shadowColor: "#48CFAD",
};
