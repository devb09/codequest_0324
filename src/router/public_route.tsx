import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/context/auth_context";

export const PublicRoute = ({ children }: { children: ReactElement }) => {
  const {logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/" />;
};
