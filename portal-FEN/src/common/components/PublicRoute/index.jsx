import React from "react";
import loadable from "@loadable/component";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <SideBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <Component />
      </div>
    </>
  );
};
export { PublicRoute };
