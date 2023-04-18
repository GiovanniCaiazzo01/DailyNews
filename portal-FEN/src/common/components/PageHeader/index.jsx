import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
const PageHeader = ({ label }) => {
  const { pathname } = useLocation();

  const header = {
    "/": "Latest News",
    "/profile": "Your Profile",
    "/saved": "Your Saved News",
  };
  return <div id="page-header">{label ? label : header[pathname]}</div>;
};

export { PageHeader };
