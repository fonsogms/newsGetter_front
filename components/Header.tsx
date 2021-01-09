import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";
import * as RootNavigation from "../RouteNavigation";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
  OverflowMenuProvider,
} from "react-navigation-header-buttons";
const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="blue"
    {...props}
  />
);

const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;

const ReusableHiddenItem = ({ onPress }) => (
  <HiddenItem title="hidden2" onPress={onPress} />
);
const Header = (props) => {
  useEffect(() => {
    if (!props.token) {
      RootNavigation.navigate("Home", {});
    }
  }, [props.token]);
  const logout = async () => {
    await AsyncStorage.setItem("token", "");
    props.setToken("");
    RootNavigation.navigate("Home", {});
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        {/*    <Item
          title="search"
          iconName="ios-search"
          onPress={() => alert("search")}
        />
        <ReusableItem onPress={() => alert("Edit")} /> */}
        <OverflowMenu
          style={{ marginHorizontal: 10 }}
          OverflowIcon={<Ionicons name="ios-reorder" size={70} color="white" />}
        >
          <HiddenItem
            title="Home"
            onPress={() => RootNavigation.navigate("NewsFeed", {})}
          />
          <HiddenItem title="logout" onPress={() => logout()} />
        </OverflowMenu>
      </HeaderButtons>
    </View>
  );
};

export default Header;
