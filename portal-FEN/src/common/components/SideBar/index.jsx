import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./style.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const name = localStorage.getItem("name") || "D.News";

  const { pathname } = useLocation();
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => setOpen(() => (open ? false : true))}
      className={open ? "sidebar open" : "sidebar"}
    >
      <div className="toggle">
        <i className="bx bx-chevron-right"></i>
      </div>

      <div className="logo">
        <img
          src="https://png.pngtree.com/template/20191017/ourlarge/pngtree-letter-n-logo-vector-designs-initials-n-logo-image_320358.jpg"
          alt="..."
        />

        <h3>{name}</h3>
      </div>

      <nav>
        <div className="nav-title">Management</div>

        <ul>
          <li
            className={pathname === "/" ? "nav-item active" : "nav-item"}
            onClick={() => navigate("/")}
          >
            <i className="bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </li>
          <li
            className={
              pathname === "/settings" ? "nav-item active" : "nav-item"
            }
            onClick={() => navigate("/profile")}
          >
            <i className="bx bxs-cog"></i>
            <span>Settings</span>
          </li>
          {isLogged ? (
            <li className="nav-item">
              <i className="bx bx-log-out"></i>
              <span>Log-out</span>
            </li>
          ) : (
            <li className="nav-item" onClick={() => navigate("/login")}>
              <i className="bx bx-log-in"></i>

              <span>Log-in</span>
            </li>
          )}
        </ul>

        <hr />

        <div className="nav-title">Supports</div>

        <ul>
          <li className="nav-item">
            <i className="bx bxs-help-circle"></i>
            <span>Get Help</span>
          </li>
          <li className="nav-item">
            <i className="bx bxs-message-dots"></i>
            <span>Send Feedback</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
