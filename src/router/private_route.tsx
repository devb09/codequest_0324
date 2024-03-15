import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/context/auth_context";
import Layout from "../components/layout/layout";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { logged } = useContext(AuthContext);

  return logged ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};
