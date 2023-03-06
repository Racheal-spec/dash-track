import React, { ReactNode } from "react";
import { ApiProvider } from "./ApiContext";

const MainContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ApiProvider>{children}</ApiProvider>;
};
export default MainContext;
