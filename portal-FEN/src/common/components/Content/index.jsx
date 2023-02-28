import React from "react";
import { SideBar } from "../SideBar";
import "./style.css";

const Content = ({ component: Component }) => {
  return (
    <>
      <div className="content-container">
        <SideBar />
        <Component />
      </div>
    </>
  );
};

export { Content };
