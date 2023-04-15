import React from "react";
import loadable from "@loadable/component";
import useWindowDimension from "../../../hooks/getWindowDimension";

const SideBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.SideBar,
});

const BottomBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.BottomBar,
});

const PublicRoute = ({ component: Component }) => {
  const { width } = useWindowDimension();

  return (
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
  );
};
export { PublicRoute };
