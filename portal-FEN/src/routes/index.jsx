import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { PublicRoute, PrivateRoute } from "../common/components/";

const NewsList = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.NewsList,
});
const Login = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Login,
});
const Register = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Register,
});
const ProfileSettings = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.ProfileSettings,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PublicRoute component={NewsList} />} />
      <Route
        exact
        path="/profile-settings"
        element={<PrivateRoute component={ProfileSettings} />}
      />
      <Route
        exact
        path="/login"
        element={
          <Login
            bg={`https://picsum.photos/id/${
              Math.floor(Math.random() * 100) + 1
            }/1920/1080`}
          />
        }
      />
      <Route
        exact
        path="/register"
        element={
          <Register
            bg={`https://picsum.photos/id/${
              Math.floor(Math.random() * 100) + 1
            }/1920/1080`}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
