import { createContext, useContext } from "react";
export interface RootContent {
  token: string;
  setToken: (c: string) => void;
}

export const RootContext = createContext<RootContent>({
  token: "", // set a default value
  setToken: () => {},
});
export const useRootContext = () => useContext(RootContext);
