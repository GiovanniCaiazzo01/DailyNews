import React, { useState } from "react";
import loadable from "@loadable/component";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <SideBar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Component />
      </div>
    </>
  );
};
export { PublicRoute };
