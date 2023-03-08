import React from "react";
import loadable from "@loadable/component";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
      <SideBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Component />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export { PrivateRoute };
