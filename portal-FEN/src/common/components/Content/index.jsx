import React from "react";
import { SideBar } from "../SideBar";
import "./style.css";

const Content = ({ component: Component }) => {
  return (
    <>
      <SideBar />
      <Component />
    </>
  );
};

export { Content };
