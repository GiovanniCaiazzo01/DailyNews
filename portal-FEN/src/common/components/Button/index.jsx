import React from "react";
import "./style.css";
const Button = ({ label, type, name, onClick }) => {
  return (
    <button
      className="button normal-btn"
      name={name}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { Button };
