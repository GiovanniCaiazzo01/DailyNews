import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
const PageHeader = () => {
  const { pathname } = useLocation();

  const label = {
    "/": "Latest News",
    "/profile": "Your Profile",
  };
  return <div id="page-header">{label[pathname]}</div>;
};

export { PageHeader };
