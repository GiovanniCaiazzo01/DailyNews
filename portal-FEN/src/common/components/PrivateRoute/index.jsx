import React from "react";
import loadable from "@loadable/component";
import { Navigate } from "react-router-dom";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const PrivateRoute = ({ component: Component }) => {
  let token = false;

  localStorage.getItem("token") ? (token = true) : (token = false);

  console.log(token);
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
