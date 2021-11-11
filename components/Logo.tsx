import React from "react";
import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      style={{
        height: "70%",
        width: "100%",
      }}
      resizeMode="contain"
      source={require("../assets/logo_nocolor.png")}
    ></Image>
  );
};

export default Logo;
