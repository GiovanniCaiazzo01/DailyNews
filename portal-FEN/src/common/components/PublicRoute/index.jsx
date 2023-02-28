import React from "react";
import loadable from "@loadable/component";

const NavBar = loadable(() => import("../"), {
  resolveComponent: (components) => components.NavBar,
});
const Content = loadable(() => import("../"), {
  resolveComponent: (components) => components.Content,
});

const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <NavBar />
      <Content component={Component} />
    </>
  );
};
export { PublicRoute };
