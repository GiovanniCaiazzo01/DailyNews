import React from "react";
import "./style.css";
const Button = ({ label, onClick }) => {
  const onUserClick = (e) => {
    onClick(e);
  };
  return (
    <button className="button normal-btn" onClick={(e) => onUserClick(e.type)}>
      {label}
    </button>
  );
};

export { Button };
