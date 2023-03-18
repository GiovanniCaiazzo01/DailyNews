import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { PublicRoute, PrivateRoute } from "../common/components/";

const NewsList = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.NewsList,
});

const SavedNews = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.SavedNews,
});

const Login = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Login,
});
const Register = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Register,
});
const Profile = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Profile,
});

const Logout = loadable(() => import("../hooks/useLogout"), {
  resolveComponent: (components) => components.default,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PublicRoute component={NewsList} />} />
      <Route
        exact
        path="/profile"
        element={<PrivateRoute component={Profile} />}
      />

      <Route
        exact
        path="/logout"
        element={<PrivateRoute component={Logout} />}
      />
      <Route
        exact
        path="/saved"
        element={<PrivateRoute component={SavedNews} />}
      />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
