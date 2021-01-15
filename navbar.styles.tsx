import Header from "./components/Header";
import Logo from "./components/Logo";
import React from "react";
export const navBarStyles = (token, setToken, noShadow?: boolean) => {
  return {
    headerTitle: () => <Logo></Logo>,
    title: "Home",
    headerBackTitleStyle: {
      color: "white",
      fontFamily: "Mohave-Medium",
      fontSize: 20,
    },

    headerRight: () => {
      if (token) {
        return <Header token={token} setToken={setToken}></Header>;
      }
      return null;
    },

    headerTitleAlign: "center",
    headerStyle: noShadow ? noShadowHeader : headerStyle,
  } as const;
};

const headerStyle = {
  backgroundColor: "#48CFAD",
  height: 110,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowColor: "#000",
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  elevation: 100,
};
const noShadowHeader = {
  backgroundColor: "#48CFAD",
  height: 110,
  borderBottomColor: "#48CFAD",
  shadowColor: "#48CFAD",
};
