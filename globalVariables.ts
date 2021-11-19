let url: string;
if (!__DEV__) {
  console.log("here!!!!!!!!!?");
  url = "http://178.128.195.181:4000";
} else {
  url = "http://192.168.47.114:4000";
}
//192.168.43.235 ip casa
export { url };

import { Dimensions, Platform } from "react-native";
export const screen = Dimensions.get("screen");
export const isAndroid = Platform.OS === "android";
