import React from "react";
import loadable from "@loadable/component";
import useWindowDimension from "../../../hooks/getWindowDimension";
import { Navigate } from "react-router-dom";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const BottomBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.BottomBar,
});

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");
  const { width } = useWindowDimension();

  return token ? (
    <>
      {width <= 540 ? <BottomBar /> : <SideBar />}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
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
