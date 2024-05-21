import React from "react";
import { Loader } from "../Loader/Loader";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <MainContainer>{children}</MainContainer> */}
      {children}
      <Loader />
      {/* <InstallModal /> */}
    </>
  );
};

export { Layout };
