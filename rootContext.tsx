import { createContext, useContext } from "react";
export interface RootContent {
  token: string;
  setToken: (c: string) => void;
  apiError: string[];
  setApiError: (messages: string[]) => void;
}

export const RootContext = createContext<RootContent>({
  token: "", // set a default value
  setToken: () => {},
  apiError: [],
  setApiError: () => {},
});
export const useRootContext = () => useContext(RootContext);
