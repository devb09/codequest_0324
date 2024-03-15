import { ReactElement } from "react";
import "./layout.css";

const Layout = ({ children }: { children: ReactElement }) => {
  return <div>
    <span>Holaa</span>
    {children}</div>;
};

export default Layout;
