import React from "react";
import loadable from "@loadable/component";
import { Navigate } from "react-router-dom";
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
          marginTop: "50px",
          width: "100%",
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
