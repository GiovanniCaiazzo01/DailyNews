import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./style.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const { pathname } = useLocation();
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, [name, open]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleNavItemOnClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div onClick={handleToggle} className={`sidebar ${open ? "open" : ""}`}>
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
            className={`nav-item ${pathname === "/" ? "active" : ""}`}
            onClick={() => handleNavItemOnClick("/")}
          >
            <i className="bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </li>
          {isLogged && (
            <li
              className={`nav-item ${pathname === "/settings" ? "active" : ""}`}
              onClick={() => handleNavItemOnClick("/profile")}
            >
              <i className="bx bxs-cog"></i>
              <span>Settings</span>
            </li>
          )}
          {isLogged ? (
            <li className="nav-item">
              <i className="bx bx-log-out"></i>
              <span>Log-out</span>
            </li>
          ) : (
            <li
              className="nav-item"
              onClick={() => handleNavItemOnClick("/login")}
            >
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
