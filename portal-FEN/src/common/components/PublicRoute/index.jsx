import React from "react";
import loadable from "@loadable/component";
import { PageHeader } from "../PageHeader";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <SideBar />
      <div style={{ marginTop: "50px", marginLeft: " 75px" }}>
        <PageHeader />
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
      </div>
    </>
  );
};
export { PublicRoute };
