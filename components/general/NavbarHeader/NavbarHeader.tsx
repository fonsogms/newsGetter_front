import React from "react";
import { View, Text } from "react-native";
import Logo from "../../Logo";
import BackButton from "./BackButton";
import MenuIcon from "./MenuIcon";
import { headerStyle, innerHeaderStyle } from "./styles";

const NavbarHeader = ({
  hideBackButton,
  onOpen,
}: {
  hideBackButton?: boolean;
  onOpen?: Function;
}) => {
  return (
    <View style={headerStyle.container}>
      <View style={innerHeaderStyle.container}>
        {hideBackButton ? <View></View> : <BackButton></BackButton>}

        <Logo></Logo>
        {onOpen ? <MenuIcon onOpen={onOpen}></MenuIcon> : <View></View>}
      </View>
    </View>
  );
};

export default NavbarHeader;
