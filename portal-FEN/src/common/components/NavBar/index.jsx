import React from "react";
import { Button } from "../Button";
import "./style.css";

const NavBar = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-text-logo">Daily.News</div>
        <div className="nav-items">
          <ul>
            <li>
              <a>Notizie Salvate</a>
            </li>
          </ul>
          <div>
            <Button label={"Login"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavBar };
