import React from "react";
import "./style.css";
const Button = ({ label, type }) => {
  return (
    <button className="button normal-btn" type={type}>
      {label}
    </button>
  );
};

export { Button };
