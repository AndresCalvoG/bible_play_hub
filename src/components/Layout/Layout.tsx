import React from "react";
import { Loader } from "../Loader/Loader";
import { MainContainer } from "../../styled-components/MainContainer";

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
