import React from "react";
import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      style={{
        height: "80%",
        width: "20%",
      }}
      resizeMode="contain"
      source={require("../assets/logo_nocolor.png")}
    ></Image>
  );
};

export default Logo;
