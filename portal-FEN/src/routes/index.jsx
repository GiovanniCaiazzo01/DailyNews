import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { PublicRoute } from "../common/components/PublicRoute";

const NewsList = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.NewsList,
});
const Login = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Login,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PublicRoute component={NewsList} />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
