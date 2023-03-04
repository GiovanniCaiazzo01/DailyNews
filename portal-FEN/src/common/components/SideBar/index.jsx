import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      onClick={() => setOpen(() => (open ? false : true))}
      class={open ? "sidebar open" : "sidebar"}
    >
      <div class="toggle">
        <i class="bx bx-chevron-right"></i>
      </div>

      <div class="logo">
        <img
          src="https://png.pngtree.com/template/20191017/ourlarge/pngtree-letter-n-logo-vector-designs-initials-n-logo-image_320358.jpg"
          alt="..."
        />
        <h3>D.News</h3>
      </div>

      <nav>
        <div class="nav-title">Management</div>

        <ul>
          <li class={pathname === "/" ? "nav-item active" : "nav-item"}>
            <i class="bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </li>
          <li class={pathname === "/settings" ? "nav-item active" : "nav-item"}>
            <i class="bx bxs-cog"></i>
            <span>Settings</span>
          </li>
        </ul>

        <hr />

        <div class="nav-title">Supports</div>

        <ul>
          <li class="nav-item">
            <i class="bx bxs-help-circle"></i>
            <span>Get Help</span>
          </li>
          <li class="nav-item">
            <i class="bx bxs-message-dots"></i>
            <span>Send Feedback</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
