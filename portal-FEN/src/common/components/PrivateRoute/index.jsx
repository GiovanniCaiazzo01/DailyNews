import React from "react";
import loadable from "@loadable/component";
import { Navigate } from "react-router-dom";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PrivateRoute = ({ component: Component }) => {
  let token = false;

  const localStorageToken = localStorage.getItem("token");
  localStorageToken && localStorageToken !== "undefined"
    ? (token = true)
    : (token = false);

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
