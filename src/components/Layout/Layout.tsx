import React from "react";
import Styled from "styled-components";
import { Loader } from "../Loader/Loader";

const MainContainer = Styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
`;

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Navbar /> */}
      <MainContainer>{children}</MainContainer>
      <Loader />
      {/* <InstallModal /> */}
    </>
  );
};

export default Layout;
