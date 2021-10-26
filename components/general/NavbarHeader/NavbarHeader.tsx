import React, { useRef } from "react";
import { View, Text } from "react-native";
import { useRootContext } from "../../../rootContext";
import Logo from "../../Logo";
import BackButton from "./BackButton";
import MenuIcon from "./MenuIcon";
import { headerStyle, innerHeaderStyle } from "./styles";
import { Modalize } from "react-native-modalize";
import ModalMenu from "../ModalMenu/ModalMenu";

const NavbarHeader = ({
  hideBackButton,
  showBurgerMenu,
}: {
  hideBackButton?: boolean;
  showBurgerMenu?: boolean;
}) => {
  const { setToken } = useRootContext();
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = (): void => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <View style={headerStyle.container}>
        <View style={innerHeaderStyle.container}>
          {hideBackButton ? <View></View> : <BackButton></BackButton>}

          <Logo></Logo>
          {showBurgerMenu ? (
            <MenuIcon onOpen={onOpen}></MenuIcon>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      {showBurgerMenu && (
        <Modalize modalStyle={{ backgroundColor: "white" }} ref={modalizeRef}>
          <ModalMenu setToken={setToken}></ModalMenu>
        </Modalize>
      )}
    </>
  );
};

export default NavbarHeader;
