import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { PublicRoute } from "../common/components/PublicRoute";

const NewsList = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.NewsList,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PublicRoute component={NewsList} />} />
    </Routes>
  );
};

export default MainRoutes;
