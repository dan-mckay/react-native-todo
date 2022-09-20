import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
  PropsWithChildren, // needed in React 18
} from "react";
import { Routes, RouteNames } from "../types/Routes";

type RouteProviderValue = {
  route: Routes;
  setRoute: Dispatch<SetStateAction<Routes>>;
};

const RouteContext = createContext<RouteProviderValue>(
  {} as RouteProviderValue
);

export const useRoutes = (): RouteProviderValue => {
  const routes = useContext(RouteContext);
  return routes;
};

export const RouteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [route, setRoute] = useState(RouteNames.home);
  const value = { route, setRoute };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
