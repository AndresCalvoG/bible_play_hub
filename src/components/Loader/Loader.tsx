import React from "react";
// import { useAppContext } from "../../context";
import { LoaderUI } from "./LoaderUI";

const Loader = ({ loading }: { loading: boolean }) => {
  // const { loading } = useAppContext();

  return <LoaderUI show={loading} />;
};

export { Loader };
