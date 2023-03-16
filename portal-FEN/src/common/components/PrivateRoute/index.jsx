import React from "react";
import loadable from "@loadable/component";
import { Navigate } from "react-router-dom";
import { PageHeader } from "../PageHeader";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
      <SideBar />
      <div style={{ marginTop: "50px", marginLeft: " 75px" }}>
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
  ) : (
    <Navigate to="/login" />
  );
};
export { PrivateRoute };
