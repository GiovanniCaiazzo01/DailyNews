import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./style.css";
const BottomBar = () => {
  const { isLogged } = useAuth();
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const handleNavItemOnClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div id="bottom-bar-container">
      <div
        className={`bottom-bar-item-container${
          pathname === "/" ? "-active" : ""
        }`}
        onClick={() => handleNavItemOnClick("/")}
      >
        <i id="bottom-bar-item" className="bx bxs-dashboard"></i>
      </div>

      {isLogged === true && (
        <>
          <div
            className={`bottom-bar-item-container${
              pathname === "/profile" ? "-active" : ""
            }`}
            onClick={() => handleNavItemOnClick("/profile")}
          >
            <i id="bottom-bar-item" className="bx bxs-user"></i>
          </div>
          <div
            className={`bottom-bar-item-container${
              pathname === "/saved" ? "-active" : ""
            }`}
            onClick={() => handleNavItemOnClick("/saved")}
          >
            <i id="bottom-bar-item" className="bx bx-save"></i>
          </div>
          <div
            className="bottom-bar-item-container"
            onClick={() => handleNavItemOnClick("/logout")}
          >
            <i id="bottom-bar-item" className="bx bx-log-out"></i>
          </div>
        </>
      )}
      {!isLogged && (
        <div
          className="bottom-bar-item-container"
          onClick={() => handleNavItemOnClick("/login")}
        >
          <i id="bottom-bar-item" className="bx bx-log-in"></i>
        </div>
      )}
    </div>
  );
};

export { BottomBar };
