import React from "react";
import "./style.css";
const Button = ({ label, type, onClick }) => {
  return (
    <button className="button normal-btn" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
