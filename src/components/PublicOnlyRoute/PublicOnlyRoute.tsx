import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context";

interface props {
  children: JSX.Element;
}

const PublicOnlyRoute = ({ children }: props) => {
  const { user } = useAppContext();

  if (user.id) {
    return <Navigate to="/" />;
  }
  return children;
};

export { PublicOnlyRoute };
