import React, { useState } from "react";
import "./style.css";
const Arrow = ({ direction, onClick }) => {
  const arrowDirection = {
    top: "bx bx-top-arrow-alt",
    down: "bx bx-down-arrow-alt",
    left: "bx bx-left-arrow-alt",
    right: "bx bx-right-arrow-alt",
  };
  return (
    <div id="arrow-container">
      <i
        className={`${arrowDirection[direction]}`}
        onClick={() => onClick(1)}
      ></i>
    </div>
  );
};

export { Arrow };
